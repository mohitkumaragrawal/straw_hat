import React from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';

const Hero = () => (
  <>
    <h1 className="mb-4" data-testid="hero-title">
      Recommended Movies
    </h1>
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="200" image="/static/images/cards/contemplative-reptile.jpg" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MovieName
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Casts:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* //////////////////////////////// */}

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="200" image="/static/images/cards/contemplative-reptile.jpg" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MovieName
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Casts:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* //////////////////////////////// */}

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="200" image="/static/images/cards/contemplative-reptile.jpg" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MovieName
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Casts:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* //////////////////////////////// */}

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="200" image="/static/images/cards/contemplative-reptile.jpg" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MovieName
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Casts:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* //////////////////////////////// */}

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="200" image="/static/images/cards/contemplative-reptile.jpg" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MovieName
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Casts:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  </>
);

export default Hero;
