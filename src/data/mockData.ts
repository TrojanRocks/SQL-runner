import { TableData } from '../types';

export const mockData: { [key: string]: TableData[] } = {
  'categories': [
    { categoryID: 1, categoryName: 'Beverages', description: 'Soft drinks, coffees, teas, beers, and ales', picture: '0x151C2F...' },
    { categoryID: 2, categoryName: 'Condiments', description: 'Sweet and savory sauces, relishes, spreads, and seasonings', picture: '0x151C2F...' },
    { categoryID: 3, categoryName: 'Confections', description: 'Desserts, candies, and sweet breads', picture: '0x151C2F...' },
    { categoryID: 4, categoryName: 'Dairy Products', description: 'Cheeses and dairy items', picture: '0x151C2F...' },
    { categoryID: 5, categoryName: 'Grains/Cereals', description: 'Breads, crackers, pasta, and cereal', picture: '0x151C2F...' },
    { categoryID: 6, categoryName: 'Meat/Poultry', description: 'Prepared meats and poultry products', picture: '0x151C2F...' },
    { categoryID: 7, categoryName: 'Produce', description: 'Dried fruit and bean curd', picture: '0x151C2F...' },
    { categoryID: 8, categoryName: 'Seafood', description: 'Seaweed and fish products', picture: '0x151C2F...' },
    { categoryID: 9, categoryName: 'Snacks', description: 'Chips, nuts, and other snack items', picture: '0x151C2F...' },
    { categoryID: 10, categoryName: 'Frozen Foods', description: 'Frozen meals and desserts', picture: '0x151C2F...' },
    { categoryID: 11, categoryName: 'Bakery', description: 'Fresh breads and pastries', picture: '0x151C2F...' },
    { categoryID: 12, categoryName: 'Canned Goods', description: 'Canned vegetables and fruits', picture: '0x151C2F...' },
    { categoryID: 13, categoryName: 'Spices', description: 'Herbs and spices for cooking', picture: '0x151C2F...' },
    { categoryID: 14, categoryName: 'Oils', description: 'Cooking oils and vinegars', picture: '0x151C2F...' },
    { categoryID: 15, categoryName: 'Sauces', description: 'Pasta sauces and gravies', picture: '0x151C2F...' }
  ],
  'users': [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'manager' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'user' },
    { id: 6, name: 'Diana Miller', email: 'diana@example.com', role: 'admin' },
    { id: 7, name: 'Edward Davis', email: 'edward@example.com', role: 'user' },
    { id: 8, name: 'Fiona Clark', email: 'fiona@example.com', role: 'manager' },
    { id: 9, name: 'George White', email: 'george@example.com', role: 'user' },
    { id: 10, name: 'Hannah Lee', email: 'hannah@example.com', role: 'user' },
    { id: 11, name: 'Ian Taylor', email: 'ian@example.com', role: 'admin' },
    { id: 12, name: 'Julia Moore', email: 'julia@example.com', role: 'user' },
    { id: 13, name: 'Kevin Young', email: 'kevin@example.com', role: 'manager' },
    { id: 14, name: 'Laura Hall', email: 'laura@example.com', role: 'user' },
    { id: 15, name: 'Mike Allen', email: 'mike@example.com', role: 'user' }
  ],
  'orders': [
    { id: 1, user_id: 1, product: 'Laptop', amount: 1200, date: '2024-03-15' },
    { id: 2, user_id: 2, product: 'Mouse', amount: 50, date: '2024-03-16' },
    { id: 3, user_id: 1, product: 'Keyboard', amount: 100, date: '2024-03-17' },
    { id: 4, user_id: 3, product: 'Monitor', amount: 300, date: '2024-03-18' },
    { id: 5, user_id: 4, product: 'Headphones', amount: 150, date: '2024-03-19' },
    { id: 6, user_id: 2, product: 'Webcam', amount: 80, date: '2024-03-20' },
    { id: 7, user_id: 5, product: 'Printer', amount: 200, date: '2024-03-21' },
    { id: 8, user_id: 6, product: 'Tablet', amount: 400, date: '2024-03-22' },
    { id: 9, user_id: 3, product: 'Smartphone', amount: 800, date: '2024-03-23' },
    { id: 10, user_id: 7, product: 'Smartwatch', amount: 250, date: '2024-03-24' },
    { id: 11, user_id: 8, product: 'External SSD', amount: 120, date: '2024-03-25' },
    { id: 12, user_id: 9, product: 'Gaming Console', amount: 500, date: '2024-03-26' },
    { id: 13, user_id: 10, product: 'Wireless Earbuds', amount: 180, date: '2024-03-27' },
    { id: 14, user_id: 11, product: 'Graphics Card', amount: 600, date: '2024-03-28' },
    { id: 15, user_id: 12, product: 'Power Bank', amount: 70, date: '2024-03-29' }
  ]
}; 