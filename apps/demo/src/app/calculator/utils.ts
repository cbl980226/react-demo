export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

export function fahrenheitToCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

export function transformTemperature<T extends string | number>(
  temperature: T,
  transform: (temperature: number) => number
): string {
  let input: number;
  if (typeof temperature === 'string') {
    input = parseFloat(temperature);
  } else {
    input = temperature;
  }

  if (Number.isNaN(input)) {
    return '';
  }

  const output = transform(input);
  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
}
