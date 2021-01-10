import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';

import { Container } from '../styles/pages/Index';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Feach - Sociedade secreta</title>
    </Head>

    <Header />

    <Container />
  </>
);

export default Home;
