import React from 'react';
import { TableFooter, TableRow, TablePagination } from '@mui/material';

interface ResultsPaginationProps {
  columns: string[];
  count: number;
  rowsPerPage: number;
  page: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ResultsPagination: React.FC<ResultsPaginationProps> = ({
  columns,
  count,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
}) => {
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          colSpan={columns.length}
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          SelectProps={{
            inputProps: { 'aria-label': 'rows per page' },
            native: true,
          }}
        />
      </TableRow>
    </TableFooter>
  );
};

export default ResultsPagination;
