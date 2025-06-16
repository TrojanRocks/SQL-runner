import React from 'react';
import { 
  Drawer, 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction,
  IconButton,
  Divider
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import { SavedQuery } from '../../../types';

interface QueryHistoryProps {
  open: boolean;
  onClose: () => void;
  savedQueries: SavedQuery[];
  onLoadQuery: (query: string) => void;
}

const QueryHistory: React.FC<QueryHistoryProps> = ({
  open,
  onClose,
  savedQueries,
  onLoadQuery
}) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
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
  );
};

export default QueryHistory; 