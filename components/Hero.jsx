import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import Card1 from './Card1';

import axios from 'axios';
import { useRouter } from 'next/router';

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [toggle, setToggle] = useState(false);

  const router = useRouter();

  async function renderMovies() {
    const data = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
    setMovies(data.data);
  }

  useEffect(() => {
    renderMovies();
  }, []);

  const searchTerm = router.query.q;

  const handleFilter = async () => {
    if (searchTerm) {
      const data = await axios.get('https://api.tvmaze.com/search/shows?q=' + searchTerm);
      setMovies(data.data);
    }
  };

  const extractImage = item => {
    if (item.show.image) {
      if (item.show.image.original) {
        return `url(${item.show.image.original})`;
      } else if (item.show.image.meium) {
        return `url(${item.show.image.medium})`;
      }
    }
    return '';
  };

  useEffect(() => {
    handleFilter();
  }, [searchTerm]);

  return (
    <Box>
      <h1 className="mb-4" data-testid="hero-title">
        {searchTerm ? 'Search Results' : 'Recommended Movies'}
      </h1>

      <Box>
        <Grid container spacing={2}>
          {/* {movies && movies.map(item => <Card1 MovieName={item.movieName} Rating={item.rating} />)} */}
          {movies &&
            movies.map((item, idx) => (
              <Grid
                item
                key={idx}
                sx={{
                  width: '240px',
                  height: '300px',
                  margin: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  position: 'relative',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 0 5px rgba(0, 0,0,0.5)',
                  cursor: 'pointer'
                }}>
                <Box
                  sx={{
                    position: 'absolute',
                    inset: '0',
                    // zIndex: '-1',
                    backgroundImage: extractImage(item),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.8,
                    boxShadow: '0 0 5px rgba(0, 0,0,0.5)',
                    transition: 'all .5s ease',
                    ':hover': {
                      opacity: 0.5
                    }
                  }}
                />

                <Box sx={{ position: 'absolute', zIndex: '10000', color: 'red', bottom: 0 }}>
                  <Typography variant="h5" sx={{ textShadow: '0 0 5px black' }}>
                    {item.show.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
