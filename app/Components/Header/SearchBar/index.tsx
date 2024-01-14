'use client';
import { IconButton, TextField, Box } from '@mui/material';
import React, { useState } from 'react';
import * as Icons from 'react-icons/md';

// Component
const SearchBar = () => {
  const [query, setQuery] = useState('');

  // Update Query Search
  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  // Check Router And Push
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
  };
  // View
  return (
    <Box
      onSubmit={handleSubmitForm}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        position: 'relative',
        width: { lg: '50%', xs: '80%' },
      }}
      component={'form'}
    >
      <Box position={'relative'} flexGrow={1}>
        <TextField
          color="primary"
          autoComplete="off"
          sx={{
            width: '100%',
          }}
          InputProps={{
            style: {
              fontSize: '1.1rem',
              color: 'black',
              borderRadius: '1rem',
              backgroundColor: 'white',
            },
          }}
          placeholder="جستجو..."
          onChange={updateQuery}
          value={query}
        />
        {/* SearchIcon */}
        <Box>
          <IconButton
            type="submit"
            size="large"
            color="secondary"
            sx={{
              position: 'absolute',
              right: 0,
              bottom: 2,
              transform: 'translateX(-20%)',
            }}
          >
            <Icons.MdSearch />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
