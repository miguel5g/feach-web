import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import {
  FiCheckCircle,
  FiLock,
  FiMail,
  FiPlus,
  FiUser,
} from 'react-icons/fi';

import { proApi, devApi } from '../services/Api';
import Input from '../components/Input';
import Button from '../components/Button';
import { IPageProps } from '../typings';

import {
  ButtonGroup,
  Container,
  Login,
  SMDescription,
  SMTitle,
  StyledForm,
  SuccessModal,
  Title,
} from '../styles/pages/Register';

interface IFormData {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC<IPageProps> = ({ env }) => {
  const router = useRouter();
  const [isEnable, setEnable] = useState(true);
  const [isOpenModal, setOpenModal] = useState(false);

  const api = env === 'development' ? devApi : proApi;

  function handleSuccess() {
    localStorage.removeItem('@feach/user-data');
    router.push('/login');
  }

  function handleSubmit(data: IFormData) {
    if (!isEnable) return;

    setEnable(false);

    api.post('/user', data)
      .then(() => {
        setOpenModal(true);
      })
      .catch(() => {
        setEnable(true);
        toast.error('Algo deu errado, verifique os dados e tente novamente.');
      });
  }

  return (
    <>
      <Head>
        <title>Criar conta</title>
      </Head>

      <Container>
        <StyledForm onSubmit={handleSubmit}>
          <Title>Criar conta</Title>

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
            name="email"
            type="email"
            title={(
              <>
                <FiMail />
                Email
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
              <FiPlus />
              Criar
            </Button>
          </ButtonGroup>

          <Link href="/login" passHref>
            <Login>Já tem uma conta? Clique aqui!</Login>
          </Link>
        </StyledForm>

        {isOpenModal && (
          <SuccessModal>
            <FiCheckCircle />

            <SMTitle>Conta criada com sucesso!</SMTitle>
            <SMDescription>
              Agora só mais uma coisinha e você está pronto!
              <br />
              Ative sua conta clicando no link presente no email enviado,
              não esqueça de checar a caixa de spam ou no lixo.
            </SMDescription>

            <Button type="button" onClick={handleSuccess} primary>
              Continuar
            </Button>
          </SuccessModal>
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

export default Register;
