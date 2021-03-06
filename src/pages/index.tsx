import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { FaDiscord } from 'react-icons/fa';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { IPageProps } from '../typings';

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

import { AS1, AS2GameItem, AS2GameList } from '../animations/Index';

interface IHomeProps extends IPageProps {}

const Home: React.FC<IHomeProps> = ({ env }) => (
  <>
    <Head>
      <title>Feach - Sociedade secreta</title>
    </Head>

    <Header env={env} />

    <Container>
      <S1
        variants={AS1}
        initial="hidden"
        animate="visible"
      >
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

        <S2GameList
          variants={AS2GameList}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3, 4, 5].map((index) => (
            <S2GameItem
              key={index}
              variants={AS2GameItem}
            >
              <S2GameIcon src="/svg/no-data.svg" />
              <S2GameTitle>Em breve!</S2GameTitle>
              <S2GamePrice>
                R$00,00
                <span>R$00,00</span>
              </S2GamePrice>
            </S2GameItem>
          ))}
        </S2GameList>
      </S2>
    </Container>

    <Footer />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const env = process.env.NODE_ENV || 'production';

  return {
    props: {
      env,
    },
  };
};

export default Home;
