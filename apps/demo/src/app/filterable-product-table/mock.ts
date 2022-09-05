export interface Product {
  id: string;
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export const products: Product[] = [
  { id: 'a', category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { id: 'b', category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { id: 'c', category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { id: 'd', category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { id: 'e', category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { id: 'f', category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];
