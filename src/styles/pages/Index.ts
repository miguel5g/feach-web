import styled from 'styled-components';
import BaseLink from '../../components/BaseLink';

export const Container = styled.main`
  height: max-content;

  padding-bottom: 25px;
`;

const Section = styled.section`
  display: flex;

  margin: 25px 60px;

  @media (max-width: 826px) {
    margin: 25px;
  }
`;

/* Section 1 */

export const S1 = styled(Section)`
  align-items: center;
  justify-content: center;

  padding: 0 60px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    max-width: 600px;
    margin-right: 60px;
  }

  @media (max-width: 1600px) {
    justify-content: space-between;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0;

    & > div {
      text-align: center;
      justify-content: center;
      align-items: center;

      margin-right: 0;
      margin-bottom: 23px;
    }
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
  max-width: 462px;
  min-width: 270px;
`;

export const StyledLink = styled(BaseLink)`
`;

/* Section 2 */

export const S2 = styled(Section)`
  flex-direction: column;
  align-items: center;

  margin-top: 64px;
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 0;
  }
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
  flex-wrap: wrap;
  justify-content: center;

  list-style: none;
`;

export const S2GameItem = styled.li`
  display: flex;
  flex-direction: column;

  width: 184px;
  margin: 15px 0;
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
