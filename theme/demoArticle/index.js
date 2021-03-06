// @flow
import React from 'react';
import { Prism } from 'react-syntax-highlighter';
import styled from 'styled-components';

import syntax from './prism';
import { black, whiteLight } from '../colors';
import { A } from '../';
/*::
import type { Node } from 'react';
*/

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

const HeaderStl = styled.h3`
  grid-area: header;
  padding: .5rem;
  margin: 0;
  & > a {
    text-decoration: none;
    padding-left: .5rem;
    cursor: pointer;
  }
`;

/*::
type HeaderProps = {|
  bookmark?: string,
  children: Node,
  rest?: any,
|}
*/
export const Header = ({ bookmark, children, ...rest }/*: HeaderProps*/) => (
  <HeaderStl id={bookmark || ''} {...rest}>
    {children}{bookmark && ( <A href={`#${ bookmark }`}>#</A>)}
  </HeaderStl>
);

/*::
type CodeProps = {|
  children: Node,
  rest?: any,
|}
*/
export const Code = ({ children, ...rest }/*: CodeProps*/) => (
  <Prism language='javascript' style={syntax} {...rest}>
    {children}
  </Prism>
);

export const Component = styled.div`
  grid-area: component;
  padding: .5rem;
  margin: 0;
`;

export const Comment = styled.em`
  grid-area: comment;
  padding: .5rem;
  @media (min-width: 160ch) {
    max-width: 70ch;
  }
  margin: 0;
`;
