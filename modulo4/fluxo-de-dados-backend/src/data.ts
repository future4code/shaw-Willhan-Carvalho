export type Product = { 
  id: string,
  name: string,
  price: number
}

export const products: Product[] = [
  {
      id: '1',
      name: 'Laranja',
      price: 3
  },
  {
      id: '2',
      name: 'Limão',
      price: 2
  },
  {
      id: '3',
      name: 'Uva',
      price: 4
  }
]