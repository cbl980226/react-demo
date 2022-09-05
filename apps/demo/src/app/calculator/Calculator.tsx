import { Component, ReactNode } from 'react';

import BoilingVerdict from './boiling-verdict/BoilingVerdict';
import TemperatureInputField from './temperature-input-field/TemperatureInputField';

import { ScaleName } from './types';
import { celsiusToFahrenheit, fahrenheitToCelsius, transformTemperature } from './utils';

/* eslint-disable-next-line */
export interface CalculatorProps {}

export class Calculator extends Component<
  CalculatorProps,
  {
    scale: ScaleName;
    celsius: string;
    fahrenheit: string;
  }
> {
  constructor(props: CalculatorProps) {
    super(props);
    this.state = {
      scale: 'celsius',
      celsius: '',
      fahrenheit: '',
    };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature: string) {
    this.setState({
      scale: 'celsius',
      celsius: temperature,
      fahrenheit: transformTemperature(temperature, celsiusToFahrenheit),
    });
  }

  handleFahrenheitChange(temperature: string) {
    this.setState({
      scale: 'fahrenheit',
      celsius: transformTemperature(temperature, fahrenheitToCelsius),
      fahrenheit: temperature,
    });
  }

  override render(): ReactNode {
    return (
      <div>
        <TemperatureInputField
          scale="celsius"
          temperature={this.state.celsius}
          handleTemplateChange={this.handleCelsiusChange}
        />
        <TemperatureInputField
          scale="fahrenheit"
          temperature={this.state.fahrenheit}
          handleTemplateChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(this.state.celsius)} />
      </div>
    );
  }
}

export default Calculator;
