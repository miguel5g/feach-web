import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 300px;

  background: ${({ theme }) => theme.bg.primary};
  border-radius: 6px;

  outline: 0;
`;

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: calc(100% - 48px);
  height: calc(100% - 48px);
  padding: 7px;
  
  border-radius: 6px;
  border: 1px dashed ${({ theme }) => theme.app.primary};

  color: ${({ theme }) => theme.txt.primary};
  font-size: 1.5rem;

  & > svg {
    margin-bottom: 13px;
    
    color: ${({ theme }) => theme.app.primary};
    font-size: 2.3rem;
  }
`;
