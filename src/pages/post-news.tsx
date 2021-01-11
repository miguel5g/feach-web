import React from 'react';
import { FiArrowLeft, FiSend } from 'react-icons/fi';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// import api from '../services/Api';
import Input from '../components/Input';

import {
  BackButton,
  Container,
  LocalHeader,
  Logo,
  PageTitle,
  StyledForm,
  FildTitle,
  SubmitButton,
} from '../styles/pages/PostNews';
import Footer from '../components/Footer';
import TextArea from '../components/TextArea';

const AddPoint: React.FC = () => {
  const PostEditor = dynamic(() => import('../components/PostEditor'), { ssr: false });

  function handleSubmit(data: any) {
    // eslint-disable-next-line no-console
    console.log(data);
  }

  return (
    <>
      <Head>
        <title>Criar um novo post</title>
      </Head>

      <Container>
        <LocalHeader>
          <Logo src="/svg/logo.svg" />
          <Link href="/news" passHref>
            <BackButton>
              <FiArrowLeft />
              Voltar para news
            </BackButton>
          </Link>
        </LocalHeader>

        <StyledForm onSubmit={handleSubmit}>
          <PageTitle>
            Criar novo post
          </PageTitle>

          <FildTitle>Dados</FildTitle>

          <Input
            name="title"
            title="Título do post"
            type="text"
            maxLength={30}
          />

          <TextArea
            name="description"
            title="Descrição"
            type="text"
          />

          <FildTitle>Post</FildTitle>

          <PostEditor />

          <SubmitButton type="submit" primary>
            <FiSend />
            Publicar
          </SubmitButton>
        </StyledForm>
      </Container>

      <Footer />
    </>
  );
};

export default AddPoint;
