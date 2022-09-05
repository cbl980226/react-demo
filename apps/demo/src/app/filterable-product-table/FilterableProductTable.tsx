import { Component, ReactNode } from 'react';
import { Product } from './mock';

/* eslint-disable-next-line */
export interface FilterableProductTableProps {
  products: Product[];
}
/* eslint-disable-next-line */
export interface FilterableProductTableState {
  filterText: string;
  inStockOnly: boolean;
}

export class FilterableProductTable extends Component<FilterableProductTableProps, FilterableProductTableState> {
  constructor(props: FilterableProductTableProps) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }

  handleFilterTextChange(value: string) {
    this.setState({
      filterText: value,
    });
  }

  handleInStockOnlyChange(value: boolean) {
    this.setState({
      inStockOnly: value,
    });
  }

  override render(): ReactNode {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          handleFilterTextChange={this.handleFilterTextChange}
          inStockOnly={this.state.inStockOnly}
          handleInStockOnlyChange={this.handleInStockOnlyChange}
        />
        <ProductTable
          sortByCategory
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          products={this.props.products}
        />
      </div>
    );
  }
}

// SearchBar

interface SearchBarProps {
  filterText: string;
  handleFilterTextChange: (value: string) => void;
  inStockOnly: boolean;
  handleInStockOnlyChange: (value: boolean) => void;
}

class SearchBar extends Component<SearchBarProps> {
  override render() {
    return (
      <form>
        <fieldset>
          <legend>Search: </legend>
          <input
            type="text"
            name="searchValue"
            id="searchValue"
            onChange={(e) => this.props.handleFilterTextChange(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <input
            type="checkbox"
            name="inStockOnly"
            id="inStockOnly"
            onChange={(e) => this.props.handleInStockOnlyChange(e.target.checked)}
          />
          <label htmlFor="inStockOnly">Only show products in stock</label>
        </fieldset>
      </form>
    );
  }
}

// ProductTable

interface ProductTableProps {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
  sortByCategory: boolean;
}
class ProductTable extends Component<ProductTableProps> {
  override render(): ReactNode {
    const rows: ReactNode[] = [];
    let products = this.props.products;
    let lastCategory: string;

    if (this.props.sortByCategory) {
      products = products.sort((prev, next) => prev.category.localeCompare(next.category));
    }

    products.forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1) return;
      if (this.props.inStockOnly && !product.stocked) return;

      if (this.props.sortByCategory) {
        if (product.category !== lastCategory) {
          rows.push(<ProductTableCategoryRow key={`${product.category}:${product.id}`} product={product} />);
        }
        lastCategory = product.category;
      }

      rows.push(<ProductTableRow key={product.id} product={product} />);
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

interface ProductTableCategoryRowProps {
  product: Product;
}
class ProductTableCategoryRow extends Component<ProductTableCategoryRowProps> {
  override render(): ReactNode {
    return (
      <tr>
        <td>{this.props.product.category}</td>
      </tr>
    );
  }
}

interface ProductTableRowProps {
  product: Product;
}
class ProductTableRow extends Component<ProductTableRowProps> {
  override render(): ReactNode {
    const product = this.props.product;
    const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default FilterableProductTable;
