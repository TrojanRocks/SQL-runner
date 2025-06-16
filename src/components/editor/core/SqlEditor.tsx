import React from 'react';
import { Paper, Box, Button, IconButton, Typography, Tooltip } from '@mui/material';
import Editor from '@monaco-editor/react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HistoryIcon from '@mui/icons-material/History';
import SaveIcon from '@mui/icons-material/Save';
import { SqlEditorProps } from '../../types';
import QueryHistory from '../history/QueryHistory';
import SaveQueryDialog from '../dialogs/SaveQueryDialog';

const SqlEditor: React.FC<SqlEditorProps> = ({ 
  query, 
  onQueryChange, 
  onExecute,
  savedQueries,
  onSaveQuery,
  onLoadQuery
}) => {
  const [isHistoryOpen, setIsHistoryOpen] = React.useState(false);
  const [isSaveDialogOpen, setIsSaveDialogOpen] = React.useState(false);
  const [queryName, setQueryName] = React.useState('');

  const handleSaveQuery = () => {
    if (queryName.trim()) {
      onSaveQuery(query, queryName);
      setQueryName('');
      setIsSaveDialogOpen(false);
    }
  };

  return (
    <Paper 
      elevation={3} 
      sx={{ p: 2, mb: 2 }}
      role="region"
      aria-label="SQL Query Editor"
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6" component="h2">
          SQL Editor
        </Typography>
        <Box>
          <Tooltip title="Query History">
            <span>
              <IconButton 
                onClick={() => setIsHistoryOpen(true)}
                aria-label="View Query History"
              >
                <HistoryIcon />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Save Query">
            <span>
              <IconButton 
                onClick={() => setIsSaveDialogOpen(true)}
                aria-label="Save Current Query"
              >
                <SaveIcon />
              </IconButton>
            </span>
          </Tooltip>
        </Box>
      </Box>

      <Editor
        height="200px"
        defaultLanguage="sql"
        value={query}
        onChange={(value) => onQueryChange(value || '')}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          accessibilitySupport: 'on',
          ariaLabel: 'SQL Query Input',
        }}
      />

      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<PlayArrowIcon />}
          onClick={onExecute}
          aria-label="Execute SQL Query"
          role="button"
        >
          Run Query
        </Button>
      </Box>

      <SaveQueryDialog
        open={isSaveDialogOpen}
        onClose={() => setIsSaveDialogOpen(false)}
        queryName={queryName}
        onQueryNameChange={setQueryName}
        onSave={handleSaveQuery}
      />

      <QueryHistory
        open={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        savedQueries={savedQueries}
        onLoadQuery={onLoadQuery}
      />
    </Paper>
  );
};

export default SqlEditor; 