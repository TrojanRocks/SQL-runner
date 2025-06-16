import React from 'react';
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
  Tooltip
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ResultsTableProps } from '../types';

const ResultsTable: React.FC<ResultsTableProps> = ({ columns, data, onExport, onCopy }) => {
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
          Results
        </Typography>
        <Box>
          <Tooltip title="Copy Results" arrow>
            <span>
              <IconButton 
                onClick={onCopy}
                aria-label="Copy results to clipboard"
              >
                <ContentCopyIcon />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Export Results" arrow>
            <span>
              <IconButton 
                onClick={onExport}
                aria-label="Export results to CSV"
              >
                <FileDownloadIcon />
              </IconButton>
            </span>
          </Tooltip>
        </Box>
      </Box>
      <TableContainer>
        <Table 
          aria-labelledby="results-heading"
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell 
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
            {data.map((row, index) => (
              <TableRow 
                key={index}
                aria-label={`Row ${index + 1}`}
              >
                {columns.map((column) => (
                  <TableCell 
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
                  sx={{ textAlign: 'center' }}
                >
                  No results found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ResultsTable; 