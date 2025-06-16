# Atlan SQL Query Runner

A web-based SQL query runner application that allows users to write and execute SQL-like queries against predefined data tables. Built with React, TypeScript, and Material-UI.

## Features

### Core Features
- SQL query input with syntax highlighting
- Query execution and results display
- Basic SQL operations (SELECT, WHERE, ORDER BY)
- Pattern matching with LIKE operator
- Responsive table view for results

### Value-Added Features
- Save and load frequently used queries
- Query history with timestamps
- Export results to CSV
- Copy results to clipboard
- Dark theme for better readability
- Keyboard accessibility
- Screen reader support

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sql-runner.git
cd sql-runner
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Usage

### Writing Queries
The application supports the following SQL-like operations:

1. Basic SELECT:
```sql
SELECT * FROM categories
```

2. Filtering with WHERE:
```sql
SELECT * FROM categories WHERE categoryName = 'Beverages'
```

3. Pattern matching:
```sql
SELECT * FROM categories WHERE description LIKE '%drinks%'
```

4. Sorting:
```sql
SELECT * FROM categories ORDER BY categoryName DESC
```

### Managing Queries
- Click the save icon to save the current query
- Click the history icon to view and load saved queries
- Use the play button to execute a loaded query

### Working with Results
- Use the copy icon to copy results to clipboard
- Use the download icon to export results as CSV
- Results are displayed in a sortable, responsive table

## Available Tables

### Categories
- categoryID (number)
- categoryName (string)
- description (string)
- picture (binary)

### Users
- id (number)
- name (string)
- email (string)
- role (string)

### Orders
- id (number)
- user_id (number)
- product (string)
- amount (number)
- date (string)

## Development

### Project Structure
```
src/
  ├── components/     # React components
  ├── data/          # Mock data
  ├── types/         # TypeScript interfaces
  ├── utils/         # Utility functions
  └── App.tsx        # Main application component
```

### Technologies Used
- React
- TypeScript
- Material-UI
- Monaco Editor
- UUID

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Monaco Editor for the SQL syntax highlighting
- Material-UI for the component library
- React team for the amazing framework 