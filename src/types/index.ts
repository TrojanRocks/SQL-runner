export interface TableData {
  [key: string]: string | number | boolean;
}

export interface QueryResult {
  data: TableData[];
  columns: string[];
}

export interface SqlEditorProps {
  query: string;
  onQueryChange: (query: string) => void;
  onExecute: () => void;
  savedQueries: SavedQuery[];
  onSaveQuery: (query: string, name: string) => void;
  onLoadQuery: (query: string) => void;
}

export interface ResultsTableProps {
  columns: string[];
  data: TableData[];
  onExport: () => void;
  onCopy: () => void;
}

export interface ResultsPaginationProps {
  columns: string[];
  count: number;
  rowsPerPage: number;
  page: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SaveQueryDialogProps {
  open: boolean;
  onClose: () => void;
  queryName: string;
  onQueryNameChange: (name: string) => void;
  onSave: () => void;
}

export interface QueryHistoryProps {
  open: boolean;
  onClose: () => void;
  savedQueries: SavedQuery[];
  onLoadQuery: (query: string) => void;
}

export interface SavedQuery {
  id: string;
  name: string;
  query: string;
  timestamp: number;
}

export interface QueryHistory {
  id: string;
  query: string;
  timestamp: number;
  executionTime: number;
  rowCount: number;
}
