export interface TableData {
  [key: string]: any;
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