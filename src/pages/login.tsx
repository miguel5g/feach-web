import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiLock, FiLogIn, FiUser } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../services/Api';
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

const Login: React.FC = () => {
  const router = useRouter();

  function handleSubmit(data: IFormData) {
    api.post('/session', data, { withCredentials: true })
      .then(() => {
        localStorage.removeItem('@feach/user-data');
        toast.success('Login efetuado com sucesso!', { pauseOnHover: false });
        setTimeout(() => {
          router.push('/');
        }, 5000);
      })
      .catch(() => {
        toast.error('Algo deu errado, verifique os dados e tente novamente.');
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
            <Button type="submit" primary>
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

export default Login;
