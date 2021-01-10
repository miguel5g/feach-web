import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import defaultTheme from '../styles/themes/default';
import GlobalStyle from '../styles/global';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Component {...pageProps} />
    <ToastContainer />
  </ThemeProvider>
);

export default App;
