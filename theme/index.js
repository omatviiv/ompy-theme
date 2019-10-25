// @flow
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Prism } from 'react-syntax-highlighter';
/*::
import type { Node } from 'react';
*/

import syntax from 'demo/theme/prism';
import { black, whiteLight, red } from 'demo/theme/colors';

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

/*::
type CodeProps = {|
  children: Node,
|}
*/
export const Code = ({ children }/*: CodeProps*/) => (
  <Prism language='javascript' style={ syntax }>
    { children }
  </Prism>
);

export const Article = styled.article`
  font-family: 'Ubuntu Mono', Consolas, monospace;
  color: ${ black };
  background-color: ${ whiteLight };
  padding: 0 0 1rem 0;
  @media (max-width: 159ch) {
    // only one columns can fit
    display: flex;
    width: 100vw;
    flex-direction: column;
  }
  @media (min-width: 160ch) {
    // two columns fit
    display: grid;
    max-width: 160ch;
    justify-content: space-between;
    grid-template-rows: min-content min-content 1fr;
    grid-template-columns: max-content 80ch;
    grid-template-areas: 'header    code'
                         'component code'
                         'comment   code';
  }
`;

export const MainHeader = styled.h1`
  padding: .5rem;
  margin: 0;
`;

/*::
type HeaderProps = {|
  bookmark?: string,
  children: Node,
|}
*/
const H2 = styled.h2`
  grid-area: header;
  padding: .5rem;
  margin: 0;
  & > a {
    text-decoration: none;
    padding-left: .5rem;
    cursor: pointer;
  }
`;

export const Header = ({ bookmark, children }/*: HeaderProps*/) => (
  <H2 id={ bookmark || '' } >
    { children }{ bookmark && ( <A href={`#${ bookmark }` }>#</A>) }
  </H2>
);

export const Comment = styled.em`
  grid-area: comment;
  padding: .5rem;
  @media (min-width: 160ch) {
    max-width: 70ch;
  }
  margin: 0;
`;

export const Component = styled.p`
  grid-area: component;
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
