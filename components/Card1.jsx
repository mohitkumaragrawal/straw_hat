import React from 'react';
import { Box } from '@mui/material';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from 'reactstrap';

const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdH6-Tul_S6LVW0jsuQoND4lPX1DnldEXheQ&usqp=CAU';
const Card1 = () => {
  return (
    <div>
      {' '}
      <Button>
        <Card sx={{ width: { lg: '300px', md: '320px', sm: '350px', xs: '400px' } }}>
          <CardMedia
            component="img"
            height="200"
            image={img}
            sx={{
              transition: ' transform .5s',
              filter: ' grayscale(10%)',
              objectFit: 'cover',

              ':hover': {
                transform: 'scale(1.25)',
                cursor: 'pointer',
                opacity: '0.5'
              }
            }}
          />
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
      </Button>
    </div>
  );
};

export default Card1;
