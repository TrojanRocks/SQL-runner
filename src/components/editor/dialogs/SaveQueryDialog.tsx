import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';

interface SaveQueryDialogProps {
  open: boolean;
  onClose: () => void;
  queryName: string;
  onQueryNameChange: (name: string) => void;
  onSave: () => void;
}

const SaveQueryDialog: React.FC<SaveQueryDialogProps> = ({
  open,
  onClose,
  queryName,
  onQueryNameChange,
  onSave,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Save Query</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Query Name"
          fullWidth
          value={queryName}
          onChange={e => onQueryNameChange(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaveQueryDialog;
