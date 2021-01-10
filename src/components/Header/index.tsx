import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/Api';

import {
  Auth,
  AuthLink,
  Container, Logo, Nav, NavItem, Spacer, UserAvatar, UserContainer, Username,
} from './styles';

interface IUser {
  id: string;
  username: string;
}

const Header: React.FC = () => {
  const [isAuth, setAuth] = useState(false);
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    api.get<IUser>('/user', { withCredentials: true })
      .then(({ data }) => {
        setUser({ id: data.id, username: data.username });
        setAuth(true);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <Container>
        <Logo src="logo.svg" />

        <Nav>
          <Link href="/" passHref>
            <NavItem>Início</NavItem>
          </Link>
          <Link href="/games" passHref>
            <NavItem>Jogos</NavItem>
          </Link>
          <Link href="/discounts" passHref>
            <NavItem>Descontos</NavItem>
          </Link>
          <Link href="/about" passHref>
            <NavItem>Sobre</NavItem>
          </Link>
        </Nav>

        {isAuth
          ? (
            <UserContainer>
              <Username>{user.username}</Username>
              <UserAvatar src="/default_user.svg" />
            </UserContainer>
          )
          : (
            <Auth>
              <Link href="/register" passHref>
                <AuthLink>
                  Cadastrar
                </AuthLink>
              </Link>
              <Link href="/login" passHref>
                <AuthLink primary>
                  <FiLogIn />
                  Entrar
                </AuthLink>
              </Link>
            </Auth>
          )}
      </Container>

      <Spacer />
    </>
  );
};

export default Header;
