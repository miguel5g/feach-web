import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiLock, FiLogIn, FiUser } from 'react-icons/fi';

import api from '../services/Api';

import {
  Container,
} from '../styles/pages/Profile';

const Login: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Meu perfil</title>
      </Head>

      <Container />
    </>
  );
};

export default Login;
