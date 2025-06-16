import { TableData } from '../types';

export const mockData: { [key: string]: TableData[] } = {
  'categories': [
    { categoryID: 1, categoryName: 'Beverages', description: 'Soft drinks coffees teas beers and ales', picture: '0x151C2F...' },
    { categoryID: 2, categoryName: 'Condiments', description: 'Sweet and savory sauces relishes spreads and seasonings', picture: '0x151C2F...' },
    { categoryID: 3, categoryName: 'Confections', description: 'Desserts candies and sweet breads', picture: '0x151C2F...' },
    { categoryID: 4, categoryName: 'Dairy Products', description: 'Cheeses', picture: '0x151C2F...' },
    { categoryID: 5, categoryName: 'Grains/Cereals', description: 'Breads crackers pasta and cereal', picture: '0x151C2F...' },
    { categoryID: 6, categoryName: 'Meat/Poultry', description: 'Prepared meats', picture: '0x151C2F...' },
    { categoryID: 7, categoryName: 'Produce', description: 'Dried fruit and bean curd', picture: '0x151C2F...' },
    { categoryID: 8, categoryName: 'Seafood', description: 'Seaweed and fish', picture: '0x151C2F...' },
  ],
  'users': [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user' },
  ],
  'orders': [
    { id: 1, user_id: 1, product: 'Laptop', amount: 1200, date: '2024-03-15' },
    { id: 2, user_id: 2, product: 'Mouse', amount: 50, date: '2024-03-16' },
    { id: 3, user_id: 1, product: 'Keyboard', amount: 100, date: '2024-03-17' },
  ],
}; 