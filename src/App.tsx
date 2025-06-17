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
    primary: {
      main: 'rgba(32, 38, 210, 0.5)',
      light: 'rgba(32, 38, 210, 0.7)',
      dark: 'rgba(32, 38, 210, 0.3)',
    },
    secondary: {
      main: '#ce93d8',
      light: '#f3e5f5',
      dark: '#ab47bc',
    },
    background: {
      default: '#0a1929',
      paper: 'rgba(32, 38, 210, 0.1)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b2bac2',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(32, 38, 210, 0.1)',
          '&:hover': {
            boxShadow: '0px 4px 20px rgba(32, 38, 210, 0.2)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 16px',
        },
        contained: {
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(32, 38, 210, 0.3)',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(32, 38, 210, 0.1)',
        },
        head: {
          fontWeight: 600,
          backgroundColor: 'rgba(32, 38, 210, 0.08)',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(32, 38, 210, 0.04)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(32, 38, 210, 0.08)',
          },
        },
      },
    },
  },
});

function App() {
  const [query, setQuery] = useState('SELECT * FROM categories');
  const [results, setResults] = useState<TableData[]>(mockData['categories']);
  const [columns, setColumns] = useState<string[]>([
    'categoryID',
    'categoryName',
    'description',
    'picture',
  ]);
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
        columns
          .map(col => {
            const value = row[col];
            return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
          })
          .join(',')
      ),
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
      ...results.map(row => columns.map(col => row[col]).join('\t')),
    ].join('\n');

    navigator.clipboard.writeText(text);
  }, [columns, results]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box component="main" sx={{ my: 4 }} role="main" aria-label="SQL Query Runner Application">
          <Typography variant="h3" component="h1" gutterBottom align="center" id="app-title">
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
