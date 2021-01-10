import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';

import Header from '../components/Header';

import {
  S1,
  S2,
  Container,
  PageDesc,
  PageTitle,
  StyledLink,
  S1Image,
  S2Title,
  S2GameList,
  S2GameItem,
  S2GameTitle,
  S2GameIcon,
  S2GamePrice,
} from '../styles/pages/Index';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Feach - Sociedade secreta</title>
    </Head>

    <Header />

    <Container>
      <S1>
        <div>
          <PageTitle>Feach Comunity</PageTitle>
          <PageDesc>
            Somos uma comunidade recem nascida com o
            propósito de juntar varias informações em um
            só lugar, desde de juntar pessas para jogarem
            até sobre os melhores preços para comprar seus jogos
          </PageDesc>

          <Link href="/about" passHref>
            <StyledLink primary>
              <FaDiscord />
              Comunidade
            </StyledLink>
          </Link>
        </div>

        <S1Image src="/img/not-found.png" />
      </S1>

      <S2>
        <S2Title>Jogos com descontos</S2Title>

        <S2GameList>
          <S2GameItem>
            <S2GameIcon src="/svg/no-data.svg" />
            <S2GameTitle>Minecraft</S2GameTitle>
            <S2GamePrice>
              R$30,50
              <span>R$130,50</span>
            </S2GamePrice>
          </S2GameItem>
          <S2GameItem>
            <S2GameIcon src="/svg/no-data.svg" />
            <S2GameTitle>Minecraft</S2GameTitle>
            <S2GamePrice>
              R$30,50
              <span>R$130,50</span>
            </S2GamePrice>
          </S2GameItem>
          <S2GameItem>
            <S2GameIcon src="/svg/no-data.svg" />
            <S2GameTitle>Minecraft</S2GameTitle>
            <S2GamePrice>
              R$30,50
              <span>R$130,50</span>
            </S2GamePrice>
          </S2GameItem>
          <S2GameItem>
            <S2GameIcon src="/svg/no-data.svg" />
            <S2GameTitle>Minecraft</S2GameTitle>
            <S2GamePrice>
              R$30,50
              <span>R$130,50</span>
            </S2GamePrice>
          </S2GameItem>
          <S2GameItem>
            <S2GameIcon src="/svg/no-data.svg" />
            <S2GameTitle>Minecraft</S2GameTitle>
            <S2GamePrice>
              R$30,50
              <span>R$130,50</span>
            </S2GamePrice>
          </S2GameItem>
        </S2GameList>
      </S2>
    </Container>

    <Footer />
  </>
);

export default Home;
