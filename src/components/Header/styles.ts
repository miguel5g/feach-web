import styled from 'styled-components';
import { motion } from 'framer-motion';

import BaseLink from '../BaseLink';

export const Container = styled(motion.header)`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 13px 60px;
  width: 100%;
  height: max-content;
  /* height: 70px; */

  background-color: ${({ theme }) => theme.bg.primary};
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.15);

  transition: padding 0.15s;
  
  @media (max-width: 826px) {
    flex-direction: column;
    align-items: flex-start;

    padding: 13px 30px;

    overflow: hidden;

    &.open {
      /* height: max-content; */
    }
  }
`;

export const Logo = styled.img`
  margin-right: 40px;

  height: 40px;

  @media (max-width: 900px) {
    margin-right: 13px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;

  @media (max-width: 826px) {
    flex-direction: column;
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

  @media (max-width: 900px) {
    margin: 0 3px;
  }

  @media (max-width: 826px) {
    margin: 0;
  }
`;

export const UserContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  margin-left: auto;
  padding: 3px 3px 3px 13px;

  border-radius: 30px;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.bg.tertiary};
  }

  &.open {
    background-color: ${({ theme }) => theme.bg.tertiary};
  }

  @media (max-width: 826px) {
    margin-left: 0;
    margin-top: 13px;
  }
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

export const UserMenu = styled(motion.div)`
  position: absolute;
  display: none;
  flex-direction: column;

  padding: 10px 5px; 
  margin-top: 13px;
  top: 41px;
  right: 0;

  background: ${({ theme }) => theme.bg.tertiary};
  border-radius: 4px;

  &.open {
    display: flex;
  }
`;

export const UserMenuItem = styled.div`
  width: 186px;
  margin: 7px 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  & > a, & > button {
    display: flex;
    align-items: center;

    padding: 7px 3px;
    width: 100%;
    height: max-content;

    background: none;
    border: none;
    border-radius: 4px;

    color: ${({ theme, color }) => color || theme.txt.secondary};
    font-size: 1.2rem;

    transition: background 0.1s;

    & > svg {
      margin-right: 3px;
    }

    &:hover {
      background: ${({ theme }) => theme.bg.primary};
      color: ${({ theme, color }) => color || theme.txt.primary};
    }
  }
`;

export const UserMenuSeparator = styled.div`
  width: 186px;
  height: 1px;
  margin: 3px 0;

  background: rgba(18, 24, 63, 0.45);
`;

export const Auth = styled.div`
  display: flex;

  margin-left: auto;

  @media (max-width: 826px) {
    margin-left: 0;
    margin-top: 13px;
  }
`;

export const AuthLink = styled(BaseLink)`
  font-size: 1.2rem;

  &:first-child {
    margin-right: 7px;
  }
`;

export const ToggleHeader = styled.div`
  display: none;
  position: fixed;

  top: 13px;
  right: 30px;

  color: ${({ theme }) => theme.txt.primary};

  & > button:last-child {
    display: none;
  }

  @media (max-width: 826px) {
    display: initial;

    &.open {
      & > button:last-child {
        display: initial;
      }

      & > button:first-child {
        display: none;
      }
    }
  }
`;

export const ToggleHeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 44px;
  width: 44px;

  color: ${({ theme }) => theme.txt.primary};
  font-size: 2rem;

  border: none;
  background: none;
`;

export const Spacer = styled.div`
  width: 100%;
  height: 70px;
`;
