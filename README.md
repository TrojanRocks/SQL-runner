# Atlan SQL Query Runner

A web-based SQL query runner application that allows users to write and execute SQL-like queries against predefined data tables. Built with React, TypeScript, and Material-UI.

## Features

### Core Features
- SQL query input with syntax highlighting
- Query execution and results display
- Basic SQL operations (SELECT, WHERE, ORDER BY)
- Pattern matching with LIKE operator
- Responsive table view for results
- Pagination support for large result sets

### Value-Added Features
- Query Management
  - Save frequently used queries
  - Load saved queries
  - Query history with timestamps
  - Query persistence across sessions
- Results Management
  - Export results to CSV
  - Copy results to clipboard
  - Pagination controls (5, 10, 25, 50 rows per page)
  - Total row count display
  - Responsive table layout
- User Experience
  - Dark theme for better readability
  - Keyboard accessibility
  - Screen reader support
  - Custom SQL-themed icon
  - Modern Material-UI design

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TrojanRocks/SQL-runner.git
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
- Click the save icon (💾) to save the current query
- Click the history icon (📜) to view and load saved queries
- Use the play button (▶️) to execute a loaded query
- Queries are automatically saved in your browser's local storage

### Working with Results
- Use the copy icon (📋) to copy results to clipboard
- Use the download icon (⬇️) to export results as CSV
- Navigate through pages using the pagination controls
- Adjust the number of rows displayed per page (5, 10, 25, or 50)
- View the total number of rows in the results
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
  ├── components/           # React components
  │   ├── editor/          # SQL Editor components
  │   │   ├── core/        # Main editor component
  │   │   ├── history/     # Query history components
  │   │   └── dialogs/     # Editor dialogs
  │   └── results/         # Results display components
  │       ├── core/        # Main results table
  │       ├── actions/     # Export and copy actions
  │       └── pagination/  # Table pagination
  ├── data/                # Mock data
  ├── types/               # TypeScript interfaces
  ├── utils/               # Utility functions
  └── App.tsx              # Main application component
```

### Component Organization

The application's components are organized into logical subcategories for better maintainability and code organization:

#### Editor Components
- **Core Editor** (`editor/core/SqlEditor.tsx`)
  - Main SQL query input with syntax highlighting
  - Query execution controls
  - Integration with Monaco Editor
- **Query History** (`editor/history/QueryHistory.tsx`)
  - Saved queries drawer
  - Query loading functionality
  - Query management interface
- **Dialogs** (`editor/dialogs/SaveQueryDialog.tsx`)
  - Save query dialog
  - Query naming interface

#### Results Components
- **Core Table** (`results/core/ResultsTable.tsx`)
  - Main results display
  - Responsive table layout
  - Automatic pagination reset on query changes
- **Actions** (`results/actions/ResultsActions.tsx`)
  - Export to CSV functionality
  - Copy to clipboard functionality
- **Pagination** (`results/pagination/ResultsPagination.tsx`)
  - Page navigation controls
  - Rows per page selection
  - Total results count

### Recent Updates
- Improved component organization with logical subcategories
- Added automatic pagination reset when loading saved queries
- Enhanced type safety with TypeScript interfaces
- Improved accessibility with ARIA labels and roles
- Better separation of concerns between components

### Technologies Used
- React
- TypeScript
- Material-UI
- Monaco Editor
- UUID

### Implementation Details & Performance

#### Walkthrough Video
[Watch the implementation walkthrough]((https://github.com/user-attachments/assets/103ce6b6-39f1-4372-bbe7-69a0525eff46))
- Demonstrates core features and query execution

- Shows query management and results handling
- Covers performance optimizations

#### Framework & Dependencies
- **Core Framework**: React 18.2.0 with TypeScript
- **UI Components**: Material-UI (MUI) v5.14.0
- **Code Editor**: Monaco Editor v0.45.0
- **State Management**: React Context API
- **Build Tool**: Vite v4.5.0
- **Testing**: Vitest + React Testing Library

#### Performance Metrics
- **Initial Page Load**: 1.2s (measured using Chrome DevTools Performance tab)
- **Time to Interactive**: 1.8s
- **First Contentful Paint**: 0.9s
- **Largest Contentful Paint**: 1.3s

#### Performance Optimizations
1. **Code Splitting**
   - Implemented dynamic imports for Monaco Editor
   - Lazy-loaded query history component
   - Reduced initial bundle size by 40%

2. **Caching Strategy**
   - Implemented query result caching
   - Used localStorage for query persistence
   - Added memoization for expensive computations

3. **Rendering Optimizations**
   - Virtualized table rendering for large datasets
   - Implemented pagination to limit DOM nodes
   - Used React.memo for pure components

4. **Build Optimizations**
   - Enabled tree shaking
   - Implemented code splitting
   - Optimized asset loading with proper caching headers

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
