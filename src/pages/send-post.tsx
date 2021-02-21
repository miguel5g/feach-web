import React, { FormEvent, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FiArrowLeft, FiSend } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { GetStaticProps } from 'next';

import Dropzone from '../components/Dropzone';
import Button from '../components/Button';
import { IPageProps } from '../typings';
import { devApi, proApi } from '../services/Api';

import {
  Container, BackButton, Form,
} from '../styles/pages/SendPost';

const SendPost: React.FC<IPageProps> = ({ env }) => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File>();
  const [isValidCode, setValidCode] = useState(true);

  const api = env === 'development' ? devApi : proApi;

  const queryKey = 'code';
  const code = router.query[queryKey] || router.asPath.match(new RegExp(`[&?]${queryKey}=(.*)(&|$)`));

  useEffect(() => {
    if (code === 'undefined' || code === null) {
      toast.error('Código invalido');
      setValidCode(false);
    }
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!isValidCode) {
      toast.error('Código invalido');
      return;
    }

    const data = new FormData();
    const parsedCode = typeof code === 'object' ? code[1] : code;

    if (selectedFile) {
      data.append('file', selectedFile);

      await api.post(`/post/${parsedCode}`, data)
        .then(() => {
          toast.success('Postagem criada com sucesso', {
            onClose: () => { router.push('/'); },
          });
        })
        .catch(({ response: res }: AxiosError) => {
          const { message }: {message: string | undefined} = res.data;

          if (!message) toast.error('Algo eu errado, entre em contato com um administrador');

          if (message === 'Invalid post code') toast.error('Seu código é invalido ou expirou');

          if (message === 'Invalid post') toast.error('Seu post é invalido, siga o padrão para poder enviar');

          if (message === 'Slug already in use') toast.error('Este slug já está em uso');

          if (message === 'Internal server error') toast.error('Algo eu errado, entre em contato com um administrador');
        });
    } else {
      toast.error('Você precisa adicionar um arquivo');
    }
  }

  return (
    <>
      <Head>
        <title>Feach - Enviar nova postagem</title>
      </Head>

      <Container>
        <BackButton onClick={() => router.push('/')}>
          <FiArrowLeft />
          Voltar para o início
        </BackButton>

        <Form onSubmit={handleSubmit}>
          <Dropzone onFileUploaded={setSelectedFile} />

          <Button type="submit">
            <FiSend />
            Enviar
          </Button>
        </Form>
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

export default SendPost;
