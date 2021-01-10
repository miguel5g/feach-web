import styled, { DefaultTheme } from 'styled-components';

export interface IBaseLinkProps {
  primary?: boolean;
  disable?: boolean;
  theme: DefaultTheme;
}

export default styled.a`
  display: flex;
  align-items: center;
  padding: 8px;

  color: ${({ theme }) => theme.txt.primary};

  font-size: 1.4rem;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 400;

  background: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.app.secondary};
  border-radius: 4px;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.txt.primary};
    background-color: ${({ theme }) => theme.app.primary};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-color: ${({ theme }) => theme.app.primary}
  }

  ${({ primary, disable, theme }: IBaseLinkProps) => {
    let css = '';

    if (disable) {
      css = `
      background-color: #D7D5D5 !important;
      box-shadow: none !important;
      color: #9E9E9E !important;
      cursor: not-allowed !important;
    `;
    } else if (primary) {
      css = `
      color: ${theme.txt.primary};
      background-color: ${theme.app.secondary};
      
      &:hover {
        color: ${theme.txt.primary};
        background-color: ${theme.app.primary};
        border-color: ${theme.app.secondary};
      }
      `;
    }

    return css;
  }};


  & > svg {
    margin-right: 3px;
  }
`;
