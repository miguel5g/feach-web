import { motion } from 'framer-motion';
import styled from 'styled-components';

import BaseLink from '../../components/BaseLink';

export const Container = styled.div`
`;

const Section = styled.section`
  display: flex;

  margin: 25px 60px;

  @media (max-width: 826px) {
    margin: 25px;
  }
`;

export const LinkGroup = styled.div`
  display: flex;

  & > a {
    margin-right: 7px;

    &:last-child {
      margin: 0;
    }
  }
`;

export const StyledLink = styled(BaseLink)`
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

/* Section 2 */

export const S2 = styled(Section)`
  flex-direction: column;
  align-items: center;

  padding: 30px 0;
`;

export const S2Title = styled.h3`
  margin-bottom: 7px;

  color: ${({ theme }) => theme.txt.primary};
  font-family: 'Ubuntu', sans-serif;
  font-size: 2.2rem;
`;

export const S2Desc = styled.p`
  text-align: center;

  max-width: 65%;
  margin-bottom: 7px;

  font-size: 1.3rem;
`;

export const S2Cards = styled.ul`
  display: flex;
  align-items: flex-end;

  margin-top: 23px;

  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const S2Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  max-width: 245px;
  height: 280px;
  padding: 23px;
  margin: 15px;

  background: ${({ theme }) => theme.bg.primary};
  border-radius: 7px;

  & > svg {
    margin-bottom: 26px;

    color: ${({ theme }) => theme.app.primary};
    font-size: 3.2rem;
  }

  &:nth-child(2) {
    height: 320px;
  }

  @media (max-width: 768px) {
    height: 245px !important;
  }
`;

export const S2CardTitle = styled.h4`
  margin-bottom: 7px;

  color: ${({ theme }) => theme.txt.primary};
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.6rem;
`;

export const S2CardDesc = styled.p`
  font-size: 1.1rem;
`;
