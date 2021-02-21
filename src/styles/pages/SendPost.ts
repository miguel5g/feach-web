import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
`;

export const BackButton = styled.button`
  position: absolute;
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

  transition: all 0.15s;
  cursor: pointer;
  z-index: 11;

  & > svg {
    margin-right: 3px;
    color: ${({ theme }) => theme.app.primary}
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const Form = styled.form`
  width: 350px;


  & > button {
    margin: 0 auto;
    margin-top: 13px;
  }
`;
