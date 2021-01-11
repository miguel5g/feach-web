import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  min-height: 300px;

  & .editor-class {
    background-color: ${({ theme }) => theme.bg.tertiary} !important;
  }
`;
