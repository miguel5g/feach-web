import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "cr lg ct";

  padding: 0 45px;
  margin-top: auto;
  height: 86px;
  
  background-color: ${({ theme }) => theme.bg.primary};
  box-shadow: 0 -7px 10px 0 rgba(0, 0, 0, 0.15);
  
  overflow: hidden;
  
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    min-height: 86px;
    padding: 15px;
    height: auto;
  }
`;

export const Logo = styled.img`
  margin: 5px auto;

  height: 52px;

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 5px;
  }
`;

export const Creator = styled.span`
  grid-area: cr;

  font-size: 1.1rem;
  font-family: 'Ubuntu', sans-serif;
  color: ${({ theme }) => theme.txt.primary};

  & > a {
    color: ${({ theme }) => theme.app.primary};
    font-style: italic;
  }

  @media (max-width: 900px) {
    margin: 0 auto;
    margin-top: 7px;
  }
`;

export const Contacts = styled.div`
  grid-area: ct;
  display: flex;
  flex-direction: row;

  margin-left: auto;

  @media (max-width: 1000px) {
    margin: 0 auto;
    margin-top: 10px;
  }
`;

export const ContactsItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 7px;
  padding: 7px;

  border: solid 2px ${({ theme }) => theme.app.primary};
  border-radius: 50%;

  color: ${({ theme }) => theme.app.primary};

  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.bg.primary};
    
    background-color: ${({ theme }) => theme.app.primary};
    box-shadow: 0 3px 8px 0 rgba(33, 43, 54, .25);
  }
`;
