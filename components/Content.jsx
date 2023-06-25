import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import Example from './Carousel';
import { useRouter } from 'next/router';

const Content = () => {
  const router = useRouter();

  const searchTerm = router.query.q;
  const isSearch = searchTerm ? true : false;

  return (
    <div className="next-steps my-5" data-testid="content" color="#2B3148">
      {!isSearch && (
        <h2 className="my-2 text-center" data-testid="content-title">
          Premiere Movies
        </h2>
      )}
      <hr />
      <Box
        sx={{
          // marginLeft: { lg: '4rem', md: '2rem', sm: '1rem', xs: '1rem' },
          // marginRight: { lg: '4rem', md: '2rem', sm: '1rem', xs: '1rem' },
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}>
        {!isSearch && <Example />}
      </Box>
    </div>
  );
};

export default Content;
