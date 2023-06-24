import React from 'react';
import { Box } from '@mui/material';
import Card1 from './Card1';
const Hero = () => (
  <Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1 className="mb-4" data-testid="hero-title">
        Recommended Movies
      </h1>
    </Box>
    <hr></hr>

    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: { lg: '2rem', md: '1rem', sm: '0.5rem', xs: '0.5rem' },
        height: 'auto',
        flexWrap: 'wrap'
      }}>
      <Card1 />
      <Card1 />
      <Card1 />
      <Card1 />
      <Card1 />
      <Card1 />
      <Card1 />
    </Box>
  </Box>
);

export default Hero;
