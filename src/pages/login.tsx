import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { FiLock, FiLogIn, FiUser } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { proApi, devApi } from '../services/Api';
import { IPageProps } from '../typings';
import Input from '../components/Input';
import Button from '../components/Button';

import {
  ButtonGroup,
  Container, Register, StyledForm, Title,
} from '../styles/pages/Login';

interface IFormData {
  username: string;
  password: string;
}

const Login: React.FC<IPageProps> = ({ env }) => {
  const router = useRouter();
  const [isEnable, setEnable] = useState(true);

  const api = env === 'development' ? devApi : proApi;

  function handleSubmit(data: IFormData) {
    if (!isEnable) return;

    setEnable(false);

    api.post('/session', data, { withCredentials: true })
      .then(() => {
        localStorage.removeItem('@feach/user-data');
        toast.success('Login efetuado com sucesso!', { pauseOnHover: false });
        setTimeout(() => {
          setEnable(true);
          router.push('/');
        }, 5000);
      })
      .catch(() => {
        toast.error('Algo deu errado, verifique os dados e tente novamente.');
        setEnable(true);
      });
  }

  return (
    <>
      <Head>
        <title>Acessar conta</title>
      </Head>

      <Container>
        <StyledForm onSubmit={handleSubmit}>
          <Title>Acessar conta</Title>

          <Input
            name="username"
            type="text"
            title={(
              <>
                <FiUser />
                Usuário
              </>
            )}
          />
          <Input
            name="password"
            type="password"
            title={(
              <>
                <FiLock />
                Senha
              </>
            )}
          />

          <ButtonGroup>
            <Button type="button" onClick={() => router.back()}>Voltar</Button>
            <Button
              type="submit"
              disable={!isEnable}
              primary
            >
              <FiLogIn />
              Entrar
            </Button>
          </ButtonGroup>

          <Link href="/register" passHref>
            <Register>Não tem uma conta? Clique aqui!</Register>
          </Link>
        </StyledForm>
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
