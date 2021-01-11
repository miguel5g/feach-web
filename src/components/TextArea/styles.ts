import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 15px;
  width: 100%;

  color: ${({ theme }) => theme.txt.secondary};
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
  
  & > span {
    display: flex;
    align-items: center;

    & > svg {
      font-size: 1.3rem;
      margin-right: 3px;
    }
  }
`;

export const StyledTextArea = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  max-height: 300px;
  min-height: 220px;
  margin-top: 5px;
  padding: 5px;

  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.txt.secondary};

  background-color: ${({ theme }) => theme.bg.tertiary};
  border: none;
  border-radius: 5px;

  transition: color 0.15s;

  &:focus {
    color: ${({ theme }) => theme.txt.primary};
  }
`;
