import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

import { Container } from '../styles/pages/About';

const About: React.FC = () => (
  <>
    <Head>
      <title>Feach - Sobre</title>
    </Head>

    <Header />

    <Container />
  </>
);

export default About;
