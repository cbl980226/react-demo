import { render } from '@testing-library/react';

import BoilingVerdict from './BoilingVerdict';

describe('BoilingVerdict', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BoilingVerdict />);
    expect(baseElement).toBeTruthy();
  });
});
