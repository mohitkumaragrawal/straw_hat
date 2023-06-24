import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';

const Hero = () => {

  const [movies,setMovies]=useState([])
  const [toggle,setToggle]=useState(false)

  async function renderMovies(){
    let l=await fetch('http://localhost:3001/api/showMovies',{
      method:'get'
    })
    setMovies(l.message)  
  }

  useEffect(()=>{
    renderMovies()
  },[])

  useEffect(()=>console.log('useEffect called'),[toggle])

  function handleFilter(){
    console.log('searched')
    const searchTerm=localStorage.getItem('searchTerm')
    if(!movies) return
    let tp=movies.filter(item=>item.includes(searchTerm))
    setMovies(tp)
    setToggle(!toggle)
  }

  return(
  <>
    <h1 className="mb-4" data-testid="hero-title">
      Recommended Movies
    </h1>
    
    <Box>
    <Button onClick={handleFilter}>Search</Button>
      <Grid container spacing={2}>
        
        {movies && movies.map(item=>(
          <Grid item xs={12} sm={6} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="200" image="/static/images/cards/contemplative-reptile.jpg" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.movieName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Casts:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.rating}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        ))}
        
        {/* //////////////////////////////// */}

        
      </Grid>
    </Box>
  </>
)};

export default Hero;
