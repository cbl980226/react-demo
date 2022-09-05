import { render } from '@testing-library/react';

import FilterableProductTable from './FilterableProductTable';

describe('FilterableProductTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilterableProductTable />);
    expect(baseElement).toBeTruthy();
  });
});
