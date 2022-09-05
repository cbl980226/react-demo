import { render } from '@testing-library/react';

import TemperatureInputField from './TemperatureInputField';

describe('TemperatureInputField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TemperatureInputField />);
    expect(baseElement).toBeTruthy();
  });
});
