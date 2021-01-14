import styled from 'styled-components';
import Button from '../../components/Button';

export const Container = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 60px 30px;
`;

export const User = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  top: 0;
  left: 0;
  width: 65vw;
  min-width: 660px;
  padding: 30px;

  background: ${({ theme }) => theme.bg.primary};
  border-radius: 5px;

  overflow: hidden;

  /* &::after {
    position: absolute;
    content: '';

    top: 0;
    left: 0;
    width: 100%;
    height: calc(calc(256px / 2) + 30px + 30px);

    background: rgba(0, 0, 0, 0.15);

    z-index: 0;
  } */
`;

export const UserHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 64px;
`;

export const UserAvatar = styled.div`
  width: 256px;
  height: 256px;
  position: relative;

  & > img {
    position: absolute;

    top: 0;
    right: 0;
    width: 100%;
    height: 100%;

    background: ${({ theme }) => theme.bg.tertiary};
    border-radius: 50%;

    z-index: 2;
  }

  &:after {
    content: '';
    position: absolute;
    display: flex;

    top: -4px;
    right: -4px;
    width: 264px;
    height: 264px;

    background: linear-gradient(130.52deg, #FC00FF 35.73%, #00DBDE 70.45%);
    border-radius: 50%;

    z-index: 1;
  }
`;

export const UserName = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 13px;

  color: ${({ theme }) => theme.txt.primary};
  font-size: 3.5rem;
  font-family: 'Ubuntu', sans-serif;

  & > span {
    color: ${({ theme }) => theme.txt.secondary};
    font-size: 1.1rem;
    font-weight: normal;
  }
`;

export const UserInfos = styled.ul`
  list-style: none;
`;

export const UserInfo = styled.li`
  display: flex;
  align-items: center;

  padding: 5px;
  margin: 7px 0;

  border-radius: 4px;

  color: ${({ theme }) => theme.txt.primary};
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.2rem;

  transition: 0.2s;

  &:hover {
    background: ${({ theme }) => theme.bg.secondary};
  }

  & > svg {
    margin-right: 5px;
    
    color: ${({ theme }) => theme.txt.secondary};
    font-size: 1.1rem;
  }

  & > span {
    display: flex;
    align-items: center;

    margin-left: auto;

    color: ${({ theme }) => theme.txt.secondary};
    font-size: 1.4rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: normal;
  }
`;

export const LinkButton = styled(Button)`
  margin: 0 auto;
  margin-top: 30px;
`;

export const BackButton = styled.button`
  position: fixed;
  display: flex;
  align-items: center;

  top: 30px;
  left: 30px;
  padding: 3px;

  background: none;
  border: none;

  color: ${({ theme }) => theme.txt.primary};
  font-size: 1.6rem;
  font-family: 'Ubuntu', sans-serif;

  cursor: pointer;

  & > svg {
    margin-right: 3px;
    color: ${({ theme }) => theme.app.primary}
  }
`;
