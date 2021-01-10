import styled from 'styled-components';
import BaseLink from '../BaseLink';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export const Image = styled.img`
  height: 45vh;
  margin-bottom: 25px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.txt.primary};
  font-family: 'Ubuntu', sans-serif;
  font-size: 3.5rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.txt.secondary};
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.4rem;

  margin-bottom: 25px;
`;

export const BackLink = styled(BaseLink)`
  
`;
