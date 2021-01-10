import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  padding: 27px;
  min-width: 350px;
  
  background-color: ${({ theme }) => theme.bg.primary};
  border-radius: 4px;
`;

export const Title = styled.h1`
  margin-bottom: 23px;

  color: ${({ theme }) => theme.txt.primary};
  font-size: 2.2rem;
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;

  margin: 15px auto;

  & > button {
    font-size: 1.3rem;

    &:first-child {
      margin-right: 7px;
    }
  }
`;

export const Login = styled.a`
  color: ${({ theme }) => theme.txt.secondary};
  font-size: 1rem;

  transition: color 0.15s;

  &:hover {
    color: ${({ theme }) => theme.txt.primary};
  }
`;
