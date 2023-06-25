import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import Highlight from '../components/Highlight';
import { Avatar, Box, Typography } from '@mui/material';
import Ntable from '../components/Ntable';

import axios from 'axios';

function Profile() {
  const { user, isLoading } = useUser();

  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    if (isLoading || !user) return;

    const { data } = await axios.post('/api/booking/readBooking', {
      userId: user.sub
    });
    setBookings(data);
    console.log(data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <Container>
      <Box
        sx={{
          mt: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10 rem',
          flexDirection: 'column'
        }}>
        {isLoading && <Loading />}
        {user && (
          <>
            <Box
              sx={{
                mt: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1 rem',
                flexDirection: 'column'
              }}>
              <Avatar src={user.picture} sx={{ width: '100px', height: '100px' }} />
              <Typography variant="h4">{user.name}</Typography>
            </Box>
            <Ntable />
          </>
        )}
      </Box>
    </Container>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
