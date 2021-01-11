import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import {
  FiLock, FiMail, FiPlus, FiUser,
} from 'react-icons/fi';

import api from '../services/Api';
import Input from '../components/Input';
import Button from '../components/Button';

import {
  ButtonGroup,
  Container,
  Login,
  StyledForm,
  Title,
} from '../styles/pages/Register';

interface IFormData {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const router = useRouter();
  const [isEnable, setEnable] = useState(true);

  function handleSubmit(data: IFormData) {
    if (!isEnable) return;

    setEnable(false);

    api.post('/user', data)
      .then(() => {
        toast.success('Registro efetuado com sucesso!', { pauseOnHover: false });
        setTimeout(() => {
          setEnable(true);
          router.push('/login');
        }, 5000);
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
      </Container>
    </>
  );
};

export default Register;
