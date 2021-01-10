import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 13px;
  width: 100%;

  color: ${({ theme }) => theme.txt.secondary};
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
`;

export const StyledSelect = styled.select`
  flex: 1;
  
  margin-top: 3px;
  padding: 8px;

  font-size: 1.4rem;
  color: ${({ theme }) => theme.txt.primary};

  appearance: none;
  background: #F0F0F5;
  border-radius: 5px;
  border: 0;
`;
