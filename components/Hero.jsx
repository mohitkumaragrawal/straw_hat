import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import Card1 from './Card1';

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [toggle, setToggle] = useState(false);

  async function renderMovies() {
    let l = await fetch('/api/showMovies', {
      method: 'get'
    });
    setMovies(l.message);
  }

  useEffect(() => {
    renderMovies();
  }, []);

  useEffect(() => console.log('useEffect called'), [toggle]);

  function handleFilter() {
    console.log('searched');
    const searchTerm = localStorage.getItem('searchTerm');
    if (!movies) return;
    let tp = movies.filter(item => item.includes(searchTerm));
    setMovies(tp);
    setToggle(!toggle);
  }

  return (
    <Box>
      <h1 className="mb-4" data-testid="hero-title">
        Recommended Movies
      </h1>

      <Box>
        <Button onClick={handleFilter}>Search</Button>
        <Grid container spacing={2}>
          {movies && movies.map(item => <Card1 MovieName={item.movieName} Rating={item.rating} />)}
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
