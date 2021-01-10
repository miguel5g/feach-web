import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

import { Container } from '../styles/pages/About';

const Games: React.FC = () => (
  <>
    <Head>
      <title>Feach - Jogos</title>
    </Head>

    <Header />

    <Container />
  </>
);

export default Games;
