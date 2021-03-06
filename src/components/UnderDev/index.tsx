import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import {
  BackLink, Container, Description, Image, Title,
} from './styles';

const UnderDev: React.FC = () => (
  <>
    <Head>
      <title>Feach - Página em desenvolvimento</title>
    </Head>

    <Container>
      <Image src="/svg/in-progress.svg" />

      <Title>Página em desenvolvimento</Title>
      <Description>Estamos trabalhando nisso a todo vapor! 😅</Description>

      <Link href="/" passHref>
        <BackLink primary>
          Ir para o Início
        </BackLink>
      </Link>
    </Container>
  </>
);

export default UnderDev;
