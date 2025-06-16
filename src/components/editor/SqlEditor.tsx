import React, { useState } from 'react';
import { 
  Paper, 
  Box, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
  Divider
} from '@mui/material';
import Editor from '@monaco-editor/react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HistoryIcon from '@mui/icons-material/History';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { SqlEditorProps, SavedQuery } from '../types';

const SqlEditor: React.FC<SqlEditorProps> = ({ 
  query, 
  onQueryChange, 
  onExecute,
  savedQueries,
  onSaveQuery,
  onLoadQuery
}) => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false);
  const [queryName, setQueryName] = useState('');

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

      {/* Save Query Dialog */}
      <Dialog open={isSaveDialogOpen} onClose={() => setIsSaveDialogOpen(false)}>
        <DialogTitle>Save Query</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Query Name"
            fullWidth
            value={queryName}
            onChange={(e) => setQueryName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsSaveDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSaveQuery} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>

      {/* Query History Drawer */}
      <Drawer
        anchor="right"
        open={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
      >
        <Box sx={{ width: 350, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Saved Queries
          </Typography>
          <List>
            {savedQueries.map((savedQuery) => (
              <div key={savedQuery.id}>
                <ListItem>
                  <ListItemText
                    primary={savedQuery.name}
                    secondary={new Date(savedQuery.timestamp).toLocaleString()}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      onClick={() => onLoadQuery(savedQuery.query)}
                      aria-label={`Load query: ${savedQuery.name}`}
                    >
                      <PlayArrowIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      onClick={() => {/* TODO: Implement delete */}}
                      aria-label={`Delete query: ${savedQuery.name}`}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Box>
      </Drawer>
    </Paper>
  );
};

export default SqlEditor; 