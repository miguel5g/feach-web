import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import {
  FiArrowLeft,
  FiCheckCircle,
  FiClock,
  FiHash,
  FiLink,
  FiLogIn,
  FiMail,
  FiUser,
  FiX,
} from 'react-icons/fi';
import { TiBusinessCard } from 'react-icons/ti';
import { BsInfoCircle } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';

import { proApi, devApi } from '../services/Api';
import { IPageProps } from '../typings';

import {
  Container,
  User,
  UserInfo,
  UserInfos,
  UserHeader,
  UserName,
  UserAvatar,
  LinkButton,
  BackButton,
  LinkExample,
  LETitle,
  LEInstructions,
  LEImage,
  LECode,
  LECommand,
} from '../styles/pages/Profile';

interface IUserData {
  id: string;
  user_number: number;
  actived: boolean;
  username: string;
  email: string;
  password: null;
  permission: '0' | '1' | '2';
  discord_id: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

interface ILinkResponse {
  code: string;
}

const permissionResolver: { [key: string]: string } = {
  0: 'Usuário',
  1: 'Editor',
  2: 'Admin',
};

const Login: React.FC<IPageProps> = ({ env }) => {
  const router = useRouter();
  const [user, setUser] = useState<IUserData>();
  const [isOpenEx, setOpenEx] = useState(false);
  const [linkCode, setLinkCode] = useState<string>();

  const api = env === 'development' ? devApi : proApi;

  useEffect(() => {
    api.get<IUserData>('/user', { withCredentials: true })
      .then(({ data }) => {
        setUser({
          ...data,
          created_at: format(new Date(data.created_at), 'dd </> MMMM </> yyyy', { locale: ptBR }).replaceAll('</>', 'de'),
        });
      })
      .catch((err) => {
        console.error(err);
        router.replace('/login');
      });
  }, []);

  function getLinkCode() {
    if (linkCode) return;

    api.get<ILinkResponse>('/link', { withCredentials: true })
      .then(({ data }) => {
        setLinkCode(data.code);
      })
      .catch(() => {});
  }

  function toggleLinkExample() {
    getLinkCode();
    setOpenEx(!isOpenEx);
  }

  return (
    <>
      <Head>
        <title>Meu perfil</title>
      </Head>

      <Container>
        {user && (
          <User>
            <UserHeader>
              <UserAvatar>
                <img src={user.avatar_url ? user.avatar_url : '/svg/default_user.svg'} alt="User avatar" />
              </UserAvatar>
              <UserName>
                {user.username}
                <span>
                  {user.id}
                  {' '}
                  #
                  {user.user_number}
                </span>
              </UserName>
            </UserHeader>

            <UserInfos>
              <UserInfo>
                <TiBusinessCard />
                ID
                <span>{user.id}</span>
              </UserInfo>

              <UserInfo>
                <FiLogIn />
                Número de registro
                <span>
                  <FiHash />
                  {user.user_number}
                </span>
              </UserInfo>

              <UserInfo>
                <FiCheckCircle />
                Verificada
                <span>{user.actived ? 'Sim' : 'Não'}</span>
              </UserInfo>

              <UserInfo>
                <FiUser />
                Nome de usuário
                <span>{user.username}</span>
              </UserInfo>

              <UserInfo>
                <FiMail />
                Email
                <span>{user.email}</span>
              </UserInfo>

              <UserInfo>
                <BsInfoCircle />
                Nível de permissão
                <span>{permissionResolver[user.permission]}</span>
              </UserInfo>

              <UserInfo>
                <FaDiscord />
                ID do Discord
                <span>{user.discord_id ? user.discord_id : 'Não vinculado'}</span>
              </UserInfo>

              <UserInfo>
                <FiClock />
                Criada em
                <span>{user.created_at}</span>
              </UserInfo>
            </UserInfos>

            {!user.discord_id && (
              <LinkButton onClick={toggleLinkExample} primary>
                <FiLink />
                Vincular Discord
              </LinkButton>
            )}
          </User>
        )}

        <BackButton
          onClick={() => router.back()}
        >
          <FiArrowLeft />
          Voltar
        </BackButton>

        {isOpenEx && (
          <LinkExample>
            <LETitle>Como vincular sua conta</LETitle>
            <LEInstructions>
              Copie o código que está logo abaixo e envie no privado do nosso bot usando o comando
              {' '}
              <span>
                .link
                {' '}
                {linkCode}
              </span>
            </LEInstructions>

            <LEImage src="https://i.ytimg.com/vi/bPMiXVzAtV0/maxresdefault.jpg" />

            <LECode>
              Seu código:
              {' '}
              <span>{linkCode}</span>
            </LECode>

            <LECommand>
              Comando:
              {' '}
              <span>
                .link
                {' '}
                {linkCode}
              </span>
            </LECommand>

            <LinkButton onClick={toggleLinkExample} primary>
              <FiX />
              Fechar
            </LinkButton>
          </LinkExample>
        )}

      </Container>

    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const env = process.env.NODE_ENV || 'production';

  return {
    props: {
      env,
    },
  };
};

export default Login;
