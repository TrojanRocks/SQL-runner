import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface ResultsActionsProps {
  onExport: () => void;
  onCopy: () => void;
}

const ResultsActions: React.FC<ResultsActionsProps> = ({ onExport, onCopy }) => {
  return (
    <Box>
      <Tooltip title="Copy Results" arrow>
        <IconButton 
          onClick={onCopy}
          aria-label="Copy results to clipboard"
        >
          <ContentCopyIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Export Results" arrow>
        <IconButton 
          onClick={onExport}
          aria-label="Export results to CSV"
        >
          <FileDownloadIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ResultsActions; 