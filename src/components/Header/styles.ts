import styled from 'styled-components';
import BaseLink from '../BaseLink';

export const Container = styled.header`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 13px 60px;
  width: 100%;
  height: max-content;
  min-height: 70px;

  background-color: ${({ theme }) => theme.bg.primary};
  border-bottom: solid 1px rgba(0, 0, 0, 0.04);
  box-shadow: 0 7px 6px 0 rgba(33, 43, 54, 0.04);

  transition: padding 0.15s;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  margin-right: 40px;

  height: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

export const NavItem = styled.a`
  margin: 0 10px;
  padding: 7px;

  border-radius: 4px;

  color: ${({ theme }) => theme.txt.secondary};
  font-size: 1.3rem;
  font-family: 'Roboto', sans-serif;

  transition: 0.15s;

  &:hover {
    color: ${({ theme }) => theme.txt.primary};
    background-color: ${({ theme }) => theme.bg.tertiary}
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;

  margin-left: auto;
  padding: 3px 9px;

  border-radius: 30px;
  background-color: ${({ theme }) => theme.bg.tertiary};

  cursor: pointer;
`;

export const Username = styled.span`
  margin-right: 7px;

  color: ${({ theme }) => theme.txt.primary};
  font-size: 1.3rem;
`;

export const UserAvatar = styled.img`
  height: 35px;
  width: 35px;
  
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bg.primary};
  /* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5); */
`;

export const Auth = styled.div`
  display: flex;

  margin-left: auto;
`;

export const AuthLink = styled(BaseLink)`
  font-size: 1.2rem;

  &:first-child {
    margin-right: 7px;
  }
`;

export const Spacer = styled.div`
  width: 100%;
  height: 70px;

  @media (max-width: 768px) {
    height: 106px;
  }
`;
