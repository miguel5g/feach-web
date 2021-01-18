import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { FaDiscord } from 'react-icons/fa';
import { FiDollarSign } from 'react-icons/fi';
import { MdMoneyOff } from 'react-icons/md';
import { IoMdPaper } from 'react-icons/io';
import { BiNetworkChart } from 'react-icons/bi';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { IPageProps } from '../typings';

import {
  S1,
  S2,
  S2Title,
  S2Desc,
  S2Cards,
  S2Card,
  S2CardTitle,
  S2CardDesc,
  S1Image,
  Container,
  PageTitle,
  PageDesc,
  StyledLink,
  LinkGroup,
} from '../styles/pages/About';

const About: React.FC<IPageProps> = ({ env }) => (
  <>
    <Head>
      <title>Feach - Sobre</title>
    </Head>

    <Header env={env} />

    <Container>
      <S1>
        <div>
          <PageTitle>Sobre a Feach</PageTitle>
          <PageDesc>
            Somos uma comunidade recem nascida com o
            propósito de juntar varias informações em um
            só lugar, desde de juntar pessas para jogarem
            até sobre os melhores preços para comprar seus jogos
          </PageDesc>
          <LinkGroup>
            <StyledLink
              href="https://discord.gg/qctaeAZUFe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDollarSign />
              Doar
            </StyledLink>
            <StyledLink
              href="https://discord.gg/qctaeAZUFe"
              target="_blank"
              rel="noopener noreferrer"
              primary
            >
              <FaDiscord />
              Discord
            </StyledLink>
          </LinkGroup>
        </div>

        <S1Image src="/svg/team.svg" />
      </S1>

      <S2>
        <S2Title>Por que participar?</S2Title>
        <S2Desc>
          Aqui você pode conversar, brincar, fazer novas amizades e
          ficar por dentro de tudo do mundo dos games,
          com conteúdos produzidos pelos próprios membros
        </S2Desc>

        <S2Cards>
          <S2Card>
            <IoMdPaper />
            <S2CardTitle>Notícias</S2CardTitle>
            <S2CardDesc>
              Noticias sobre o mundo dos games,
              tudo produzido por membros da comunidade.
            </S2CardDesc>
          </S2Card>
          <S2Card>
            <MdMoneyOff />
            <S2CardTitle>Descontos</S2CardTitle>
            <S2CardDesc>
              Fique por dentro de todos os jogos com descontos que está acontecendo nesse momento.
            </S2CardDesc>
          </S2Card>
          <S2Card>
            <BiNetworkChart />
            <S2CardTitle>Networking</S2CardTitle>
            <S2CardDesc>
              Faça amizades com pessoas com os memos interesses que os seus.
            </S2CardDesc>
          </S2Card>
        </S2Cards>
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

export default About;
