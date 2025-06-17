import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  IconButton,
  Tooltip,
  TablePagination,
  TableFooter,
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ResultsTableProps } from 'types';

const ResultsTable: React.FC<ResultsTableProps> = ({ columns, data, onExport, onCopy }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
    <Paper elevation={3} sx={{ p: 2 }} role="region" aria-label="Query Results">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" gutterBottom component="h2" id="results-heading">
          Results ({data.length} rows)
        </Typography>
        <Box>
          <Tooltip title="Copy Results" arrow>
            <IconButton onClick={onCopy} aria-label="Copy results to clipboard">
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Export Results" arrow>
            <IconButton onClick={onExport} aria-label="Export results to CSV">
              <FileDownloadIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <TableContainer>
        <Table aria-labelledby="results-heading">
          <TableHead>
            <TableRow>
              {columns.map((column: string) => (
                <TableCell
                  key={column}
                  component="th"
                  scope="col"
                  sx={{
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap',
                    minWidth: column === 'description' ? '300px' : 'auto',
                  }}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row: Record<string, string | number | boolean>, index: number) => (
              <TableRow key={index} aria-label={`Row ${startIndex + index + 1}`}>
                {columns.map((column: string) => (
                  <TableCell
                    key={`${index}-${column}`}
                    sx={{
                      whiteSpace: column === 'description' ? 'normal' : 'nowrap',
                      minWidth: column === 'description' ? '300px' : 'auto',
                    }}
                  >
                    {column === 'picture' ? 'Binary Data' : row[column]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {data.length === 0 && (
              <TableRow>
                <TableCell sx={{ textAlign: 'center' }}>No results found</TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50]}
                colSpan={columns.length}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ResultsTable;
