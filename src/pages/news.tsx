import Head from 'next/head';
import React from 'react';

import Header from '../components/Header';
import UnderDev from '../components/UnderDev';

import { Container } from '../styles/pages/News';

const News: React.FC = () => (
  <>
    <Head>
      <title>Feach - Jogos com descontos</title>
    </Head>

    <Header />

    <Container />
  </>
);

export default UnderDev;
