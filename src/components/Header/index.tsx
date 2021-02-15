/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FiLogIn, FiLogOut, FiMenu, FiUser, FiX,
} from 'react-icons/fi';

import { proApi, devApi } from '../../services/Api';

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
  UserMenu,
  UserMenuItem,
  UserMenuSeparator,
} from './styles';

interface IUser {
  id: string;
  username: string;
  avatar_url: string | null;
}

interface ILocalData {
  lastCheck: number;
  isAuth: boolean;
  data?: IUser;
}

interface IHeaderProps {
  env?: 'development' | 'production';
}

const Header: React.FC<IHeaderProps> = ({ env }) => {
  const router = useRouter();
  const [isAuth, setAuth] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isOpenUserMenu, setOpenUserMenu] = useState(false);
  const [user, setUser] = useState<IUser>();
  const [cleanupListener, setCleanupListener] = useState<Function>();

  const api = env === 'development' ? devApi : proApi;

  useEffect(() => {
    function getUserData() {
      api.get<IUser>('/user', { withCredentials: true })
        .then(({ data }) => {
          setUser({ id: data.id, username: data.username, avatar_url: data.avatar_url });
          setAuth(true);

          localStorage.setItem('@feach/user-data', JSON.stringify({
            lastCheck: Date.now(),
            isAuth: true,
            data: { id: data.id, username: data.username, avatar_url: data.avatar_url },
          } as ILocalData));
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
      setUser({
        id: userData.data.id,
        username: userData.data.username,
        avatar_url: userData.data.avatar_url,
      });
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

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 826 && isOpenUserMenu) setOpenUserMenu(false);
      if (window.innerWidth > 826 && isOpen) setOpen(false);
    }

    function removeListener() {
      if (window) window.removeEventListener('resize', handleResize);
    }

    if (window) {
      if (cleanupListener) cleanupListener();
      window.addEventListener('resize', handleResize);

      setCleanupListener(() => removeListener);
    }
  }, [isOpenUserMenu, isOpen]);

  function toggleHeader() {
    setOpen(!isOpen);
  }

  function toggleUserMenu() {
    const isMobile = window.innerWidth <= 826;

    if (isMobile) router.push('/profile');

    setOpenUserMenu(!isOpenUserMenu);
  }

  async function handleLogOut() {
    window.localStorage.removeItem('@feach/user-data');
    api.delete('/session', { withCredentials: true })
      .then(() => router.reload())
      .catch(() => {});
  }

  return (
    <>
      <Container
        className={isOpen ? 'open' : ''}
        initial={{ height: 70 }}
        animate={{ height: isOpen ? 'max-content' : 70 }}
      >
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
            <UserContainer
              className={isOpenUserMenu ? 'open' : ''}
              onClick={toggleUserMenu}
            >
              <Username>{user.username}</Username>
              <UserAvatar src={user.avatar_url ? user.avatar_url : '/svg/default_user.svg'} />

              <UserMenu className={isOpenUserMenu ? 'open' : ''}>
                <UserMenuItem>
                  <Link href="/profile" passHref>
                    <a href="/profile">
                      <FiUser />
                      Perfil
                    </a>
                  </Link>
                </UserMenuItem>

                <UserMenuSeparator />

                <UserMenuItem color="#ff0000">
                  <button type="button" onClick={handleLogOut}>
                    <FiLogOut />
                    Desconectar
                  </button>
                </UserMenuItem>
              </UserMenu>
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
