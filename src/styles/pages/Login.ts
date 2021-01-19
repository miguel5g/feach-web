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

export const Register = styled.a`
  color: ${({ theme }) => theme.txt.secondary};
  font-size: 1rem;

  transition: color 0.15s;

  &:hover {
    color: ${({ theme }) => theme.txt.primary};
  }
`;

export const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 100vw;
  height: 100vh;
  padding: 30px 100px;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1rem);

  & > svg {
    margin-bottom: 12px;
    
    color: ${({ theme }) => theme.app.primary};
    font-size: 5rem;
  }
`;

export const MTitle = styled.h4`
  color: ${({ theme }) => theme.txt.primary};
  font-size: 2rem;
`;

export const MDescription = styled.p`
  max-width: 720px;
  margin-bottom: 13px;

  font-size: 1.2rem;
`;
