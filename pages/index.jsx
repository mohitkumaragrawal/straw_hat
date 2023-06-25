import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Footer from '../components/Footer';

import { Container } from 'reactstrap';

export default function Index() {
  return (
    <>
      <Container>
        <Content />
        <Hero />

        <Footer />
      </Container>
    </>
  );
}
