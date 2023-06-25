import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import Highlight from '../components/Highlight';
import { Box } from '@mui/material';

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
      <Box sx={{ mt: '10px' }}>
        {isLoading && <Loading />}
        {user && (
          <>
            <Row className="align-items-center profile-header mb-5 text-center text-md-left" data-testid="profile">
              <Col md={2}>
                <img
                  src={user.picture}
                  alt="Profile"
                  className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                  decode="async"
                  data-testid="profile-picture"
                />
              </Col>
              <Col md>
                <h2 data-testid="profile-name">{user.name}</h2>
                <p className="lead text-muted" data-testid="profile-email">
                  {user.email}
                </p>
              </Col>
            </Row>
            {/* <Row data-testid="profile-json">
            <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
          </Row> */}
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
