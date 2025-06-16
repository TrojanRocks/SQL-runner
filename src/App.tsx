import React, { useState, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';
import SqlEditor from './components/editor/core/SqlEditor';
import ResultsTable from './components/results/core/ResultsTable';
import { TableData, SavedQuery } from './types';
import { mockData } from './data/mockData';
import { executeQuery } from './utils/queryExecutor';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [query, setQuery] = useState('SELECT * FROM categories');
  const [results, setResults] = useState<TableData[]>(mockData['categories']);
  const [columns, setColumns] = useState<string[]>(['categoryID', 'categoryName', 'description', 'picture']);
  const [savedQueries, setSavedQueries] = useState<SavedQuery[]>([]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
  };

  const handleExecuteQuery = () => {
    const { data, columns: newColumns } = executeQuery(query);
    setResults(data);
    setColumns(newColumns);
  };

  const handleSaveQuery = (query: string, name: string) => {
    const newSavedQuery: SavedQuery = {
      id: uuidv4(),
      name,
      query,
      timestamp: Date.now(),
    };
    setSavedQueries([...savedQueries, newSavedQuery]);
  };

  const handleLoadQuery = (query: string) => {
    setQuery(query);
  };

  const handleExportResults = useCallback(() => {
    const csvContent = [
      columns.join(','),
      ...results.map(row => 
        columns.map(col => {
          const value = row[col];
          return typeof value === 'string' && value.includes(',') 
            ? `"${value}"` 
            : value;
        }).join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `query-results-${new Date().toISOString()}.csv`;
    link.click();
  }, [columns, results]);

  const handleCopyResults = useCallback(() => {
    const text = [
      columns.join('\t'),
      ...results.map(row => 
        columns.map(col => row[col]).join('\t')
      )
    ].join('\n');

    navigator.clipboard.writeText(text);
  }, [columns, results]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box 
          component="main"
          sx={{ my: 4 }}
          role="main"
          aria-label="SQL Query Runner Application"
        >
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            align="center"
            id="app-title"
          >
            Atlan SQL Query Runner
          </Typography>
          
          <SqlEditor
            query={query}
            onQueryChange={handleQueryChange}
            onExecute={handleExecuteQuery}
            savedQueries={savedQueries}
            onSaveQuery={handleSaveQuery}
            onLoadQuery={handleLoadQuery}
          />

          <ResultsTable
            columns={columns}
            data={results}
            onExport={handleExportResults}
            onCopy={handleCopyResults}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App; 