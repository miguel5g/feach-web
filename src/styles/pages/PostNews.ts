import styled from 'styled-components';
import { Form } from '@unform/web';

import Button from '../../components/Button';

export const Container = styled.div`
  padding-bottom: 35px;
`;

export const LocalHeader = styled.div`
  display: flex;
  justify-content: space-between;

  width: auto;
  padding: 23px 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 13px 36px;
  }
`;

export const Logo = styled.img`
  height: 40px;

  @media (max-width: 768px) {
    height: 33px;
  }
`;

export const BackButton = styled.a`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.txt.primary};
  font-size: 1.2rem;

  & > svg {
    color: ${({ theme }) => theme.app.primary};
  }

  &:hover {
    opacity: 0.75;
  }

  @media (max-width: 768px) {
    margin-top: 7px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 60px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.bg.primary};
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.04);

  overflow: hidden;

  @media (max-width: 900px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 23px;
  }
`;

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme.txt.primary};
  font-size: 2.2rem;
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
`;

export const FildTitle = styled.span`
  display: flex;
  align-items: center;

  margin: 35px 0;

  color: ${({ theme }) => theme.txt.primary};
  font-size: 1.6rem;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;

  & > span {
    margin-left: auto;

    color: ${({ theme }) => theme.txt.secondary};
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    & > span {
      margin-left: 0;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;

  width: 100%;

  & > label {
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    & > label {
      margin-right: 0;
    }
  }
`;

export const SubmitButton = styled(Button)`
  margin-left: auto;
  margin-top: 35px;

  @media (max-width: 768px) {
    margin: 35px auto 0;
  }
`;
