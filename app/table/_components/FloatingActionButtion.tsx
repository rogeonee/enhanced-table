import React from 'react';
import { Fab } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const FloatingActionButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <Fab color="primary" aria-label="filter" onClick={onClick} style={{ position: 'fixed', bottom: 16, right: 16 }}>
    <FilterListIcon />
  </Fab>
);

export default FloatingActionButton;