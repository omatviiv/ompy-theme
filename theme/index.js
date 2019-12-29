// @flow
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { black, whiteLight, red } from './colors';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,400i,700,700i&display=swap&subset=cyrillic-ext');
  html {
    font-size: 100%;
    font-family: 'Ubuntu Mono', Consolas, monospace;
  }
  body {
    display: flex;
    justify-content: center;
    background-color: ${ whiteLight };
    min-height: 100vh;
    font-size: 1em;
    margin: 0;
  }
  main#app {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: ${ whiteLight };
    min-height: 100vh;
  }
`;

export const H1 = styled.h1`
  padding: .5rem;
  margin: 0;
`;
export const H2 = styled.h2`
  padding: .5rem;
  margin: 0;
`;
export const H3 = styled.h3`
  padding: .5rem;
  margin: 0;
`;
export const H4 = styled.h4`
  padding: .5rem;
  margin: 0;
`;
export const H5 = styled.h5`
  padding: .5rem;
  margin: 0;
`;
export const H6 = styled.h6`
  padding: .5rem;
  margin: 0;
`;

export const A = styled.a`
  color: ${ red };
  cursor: pointer;
`;

export const Button = styled.button`
  border: 1px solid ${ black };
  color: ${ black };
  padding: .5rem;
  cursor: pointer;
  background: none;
`;
