/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiLogIn, FiMenu, FiX } from 'react-icons/fi';

import api from '../../services/Api';

import {
  Auth,
  AuthLink,
  Container,
  Logo,
  Nav,
  NavItem,
  Spacer,
  UserAvatar,
  UserContainer,
  Username,
  ToggleHeader,
  ToggleHeaderButton,
} from './styles';

interface IUser {
  id: string;
  username: string;
}

interface ILocalData {
  lastCheck: number;
  isAuth: boolean;
  data?: IUser;
}

const Header: React.FC = () => {
  const [isAuth, setAuth] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    function getUserData() {
      api.get<IUser>('/user', { withCredentials: true })
        .then(({ data }) => {
          setUser({ id: data.id, username: data.username });
          setAuth(true);

          localStorage.setItem('@feach/user-data', JSON.stringify({
            lastCheck: Date.now(),
            isAuth: true,
            data: { id: data.id, username: data.username },
          }));
        })
        .catch(() => {
          localStorage.setItem('@feach/user-data', JSON.stringify({
            lastCheck: Date.now(),
            isAuth: false,
            data: undefined,
          }));
        });
    }

    const userData: ILocalData | undefined = JSON.parse(localStorage.getItem('@feach/user-data'));

    // const dayMs = 1000 * 5;
    // 30 min
    const maxAge = 1000 * 60 * 60 * 0.5;

    if (userData && userData.lastCheck > (Date.now() - maxAge) && userData.isAuth) {
      setUser({ id: userData.data.id, username: userData.data.username });
      setAuth(true);
      console.log('[Feach] Sessão local valida.');
    } else if (userData && userData.lastCheck <= (Date.now() - maxAge)) {
      getUserData();
      console.log('[Feach] Sessão local invalida.');
    } else if (!userData) {
      getUserData();
      console.log('[Feach] Sessão local não foi encontrada.');
    }
  }, []);

  function toggleHeader() {
    setOpen(!isOpen);
  }

  return (
    <>
      <Container className={isOpen ? 'open' : ''}>
        <Logo src="/svg/logo.svg" />

        <Nav>
          <Link href="/" passHref>
            <NavItem>Início</NavItem>
          </Link>
          <Link href="/games" passHref>
            <NavItem>Jogos</NavItem>
          </Link>
          <Link href="/news" passHref>
            <NavItem>Notícias</NavItem>
          </Link>
          <Link href="/about" passHref>
            <NavItem>Sobre</NavItem>
          </Link>
        </Nav>

        {isAuth
          ? (
            <UserContainer>
              <Username>{user.username}</Username>
              <UserAvatar src="/svg/default_user.svg" />
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

        <ToggleHeader className={isOpen ? 'open' : ''}>
          <ToggleHeaderButton type="button" onClick={toggleHeader}>
            <FiMenu />
          </ToggleHeaderButton>
          <ToggleHeaderButton type="button" onClick={toggleHeader}>
            <FiX />
          </ToggleHeaderButton>
        </ToggleHeader>
      </Container>

      <Spacer />
    </>
  );
};

export default Header;
