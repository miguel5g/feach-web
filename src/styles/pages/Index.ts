import styled from 'styled-components';
import BaseLink from '../../components/BaseLink';

export const Container = styled.main`
  height: max-content;

  padding-bottom: 25px;
`;

const Section = styled.section`
  display: flex;

  margin: 25px 60px;
`;

/* Section 1 */

export const S1 = styled(Section)`
  align-items: center;
  justify-content: space-between;

  padding: 0 60px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    max-width: 42%;
  }
`;

export const PageTitle = styled.h1`
  margin-bottom: 7px;

  color: ${({ theme }) => theme.txt.primary};
  font-family: 'Ubuntu', sans-serif;
  font-size: 2.6rem;
`;

export const PageDesc = styled.p`
  margin-bottom: 23px;

  font-size: 1.3rem;
`;

export const S1Image = styled.img`
  width: 42%;
`;

export const StyledLink = styled(BaseLink)`
`;

/* Section 2 */

export const S2 = styled(Section)`
  flex-direction: column;  

  margin-top: 64px;
  padding: 0 60px;
`;

export const S2Title = styled.h3`
  margin-bottom: 13px;

  color: ${({ theme }) => theme.txt.primary};
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.9rem;
  font-weight: normal;
`;

export const S2GameList = styled.ul`
  display: flex;

  list-style: none;
`;

export const S2GameItem = styled.li`
  display: flex;
  flex-direction: column;

  width: 184px;
  margin-right: 15px;

  border-radius: 13px;
  background-color: ${({ theme }) => theme.bg.primary};

  overflow: hidden;

  &:last-child {
    margin-right: 0;
  }
`;

export const S2GameTitle = styled.h4`
  margin: 0 13px;
  margin-bottom: 5px;

  color: ${({ theme }) => theme.txt.primary};
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const S2GameIcon = styled.img`
  width: 100%;
  margin-bottom: 13px;

  background-color: ${({ theme }) => theme.bg.tertiary};
`;

export const S2GamePrice = styled.span`
  margin: 13px;

  color: ${({ theme }) => theme.txt.primary};
  font-size: 1.2rem;

  & > span {
    margin-left: 3px;

    color: ${({ theme }) => theme.txt.secondary};
    font-size: 1rem;
    font-style: italic;
    text-decoration: line-through;
  }
`;

// export const GameList = styled.div``;
