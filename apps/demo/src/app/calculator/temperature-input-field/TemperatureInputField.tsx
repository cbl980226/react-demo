import { ChangeEvent, Component, ReactNode } from 'react';
import { ScaleName } from '../types';

export interface TemperatureInputFieldProps {
  temperature: string;
  scale: ScaleName;
  handleTemplateChange: (temperature: string) => void;
}

export class TemperatureInputField extends Component<TemperatureInputFieldProps> {
  constructor(props: TemperatureInputFieldProps) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    this.props.handleTemplateChange(e.target.value);
  }

  override render(): ReactNode {
    return (
      <fieldset>
        <legend>Enter temperature in {this.props.scale}</legend>
        <input
          type="text"
          name="temperature"
          id="temperature"
          value={this.props.temperature}
          onChange={this.handleInputChange}
        />
      </fieldset>
    );
  }
}

export default TemperatureInputField;
