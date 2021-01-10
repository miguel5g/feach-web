import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import {
  BackLink, Container, Description, Image, Title,
} from '../styles/pages/NotFound';

const NotFound: React.FC = () => (
  <>
    <Head>
      <title>Feach - Página não encontrada</title>
    </Head>

    <Container>
      <Image src="/svg/404.svg" />

      <Title>Página não encontrada</Title>
      <Description>Desculpe-nos, não econtramos a página que procura</Description>

      <Link href="/" passHref>
        <BackLink primary>
          Ir para o Início
        </BackLink>
      </Link>
    </Container>
  </>
);

export default NotFound;
