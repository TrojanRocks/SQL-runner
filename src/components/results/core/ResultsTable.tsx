import React, { useEffect } from 'react';
import { 
  Paper, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Box
} from '@mui/material';
import { ResultsTableProps } from '../../../types';
import ResultsActions from '../actions/ResultsActions';
import ResultsPagination from '../pagination/ResultsPagination';

const ResultsTable: React.FC<ResultsTableProps> = ({ columns, data, onExport, onCopy }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Reset pagination when data changes
  useEffect(() => {
    setPage(0);
  }, [data]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Calculate pagination
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <Paper 
      elevation={3} 
      sx={{ p: 2 }}
      role="region"
      aria-label="Query Results"
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography 
          variant="h6" 
          gutterBottom
          component="h2"
          id="results-heading"
        >
          Results ({data.length} rows)
        </Typography>
        <ResultsActions onExport={onExport} onCopy={onCopy} />
      </Box>
      <TableContainer>
        <Table 
          aria-labelledby="results-heading"
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell 
                  key={column}
                  component="th"
                  scope="col"
                  sx={{ 
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap',
                    minWidth: column === 'description' ? '300px' : 'auto'
                  }}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow 
                key={index}
                aria-label={`Row ${startIndex + index + 1}`}
              >
                {columns.map((column) => (
                  <TableCell 
                    key={column}
                    sx={{ 
                      whiteSpace: column === 'description' ? 'normal' : 'nowrap',
                      minWidth: column === 'description' ? '300px' : 'auto'
                    }}
                  >
                    {column === 'picture' ? 'Binary Data' : row[column]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {data.length === 0 && (
              <TableRow>
                <TableCell 
                  colSpan={columns.length}
                  sx={{ textAlign: 'center' }}
                >
                  No results found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <ResultsPagination
            columns={columns}
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ResultsTable; 