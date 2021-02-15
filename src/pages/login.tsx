import React, { useState } from 'react';
import { AxiosError } from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import {
  FiAlertOctagon,
  FiCheckCircle, FiLock, FiLogIn, FiUser,
} from 'react-icons/fi';
import { toast } from 'react-toastify';

import { proApi, devApi } from '../services/Api';
import { IPageProps } from '../typings';
import Input from '../components/Input';
import Button from '../components/Button';

import {
  ButtonGroup,
  Container, MDescription, Modal, MTitle, Register, StyledForm, Title,
} from '../styles/pages/Login';

interface IFormData {
  username: string;
  password: string;
}

const Login: React.FC<IPageProps> = ({ env }) => {
  const router = useRouter();
  const [isEnable, setEnable] = useState(true);
  const [modal, setModal] = useState<'success' | 'not_active'>();

  const api = env === 'development' ? devApi : proApi;

  function handleSuccess() {
    localStorage.removeItem('@feach/user-data');
    router.push('/');
  }

  function handleSubmit(data: IFormData) {
    if (!isEnable) return;

    setEnable(false);

    api.post('/session', data, { withCredentials: true })
      .then(() => {
        setModal('success');
      })
      .catch((err: AxiosError) => {
        if (err.message === 'Network Error') {
          toast.error('Algo deu errado, verifique os dados e tente novamente.');
          setEnable(true);
          return;
        }

        const { status } = err.response;

        if (status === 401) {
          const { data: resData }: {data: {message: string}} = err.response;

          if (resData.message === 'Account not activated') setModal('not_active');
          else toast.error('Algo deu errado, verifique os dados e tente novamente.');
        } else {
          toast.error('Algo deu errado, verifique os dados e tente novamente.');
        }

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

        {modal === 'success' && (
          <Modal>
            <FiCheckCircle />

            <MTitle>Login efetuado com sucesso!</MTitle>
            <MDescription>
              Bem vindo de volta!
            </MDescription>

            <Button type="button" onClick={handleSuccess} primary>
              Continuar
            </Button>
          </Modal>
        )}

        {modal === 'not_active' && (
          <Modal>
            <FiAlertOctagon />

            <MTitle>Sua conta ainda não foi ativada</MTitle>
            <MDescription>
              Ative sua conta clicando no link presente no email enviado,
              não esqueça de checar a caixa de spam ou no lixo.
            </MDescription>

            <Button type="button" onClick={() => setModal(undefined)} primary>
              Voltar
            </Button>
          </Modal>
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
