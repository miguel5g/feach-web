import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import {
  FiArrowLeft,
  FiCheckCircle,
  FiClock, FiHash, FiLink, FiLogIn, FiMail, FiUser,
} from 'react-icons/fi';
import { TiBusinessCard } from 'react-icons/ti';
import { BsInfoCircle } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';

import { proApi, devApi } from '../services/Api';
import { IPageProps } from '../typings';

import {
  Container, User, UserInfo, UserInfos, UserHeader, UserName, UserAvatar, LinkButton, BackButton,
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

const permissionResolver: { [key: string]: string } = {
  0: 'Usuário',
  1: 'Editor',
  2: 'Admin',
};

const Login: React.FC<IPageProps> = ({ env }) => {
  const router = useRouter();
  const [user, setUser] = useState<IUserData>();

  const api = env === 'development' ? devApi : proApi;

  useEffect(() => {
    api.get<IUserData>('/user', { withCredentials: true })
      .then(({ data }) => {
        setUser(data);
      })
      .catch(() => {
        router.replace('/login');
      });
  }, []);

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

            {user.discord_id && (
              <LinkButton primary>
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
