// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import {
  GlobalStyle, Button, A,
  H1, H2, H3, H4, H5, H6,
} from 'theme';
import {
  Article, Code, Header, Component, Comment,
} from 'theme/demoArticle';

const App = () => (
  <>
    <GlobalStyle />
    <H1>App header - h1</H1>
    <H2>header - h2</H2>
    <H3>header - h3</H3>
    <H4>header - h4</H4>
    <H5>header - h5</H5>
    <H6>header - h6</H6>
    <Article>
      <Header bookmark='article1'>Demo Article header</Header>
      <Component>
        A <A href='#article1'>link</A> example and a <Button>
          button
        </Button> example
      </Component>
      <Code>{ `
import React, { useState } from 'react';
import SomeComponent from 'some-component';

export const = () => {
  const [{ value }, setValue] = useState({ value: '' });

  return (
    <div>
      <input value={ value } onChange={ e => setValue(e.targe.value) } />
    </div>
  );
};
      ` }</Code>
      <Comment>
        Comment for the article
      </Comment>
    </Article>
  </>
);

export default App;
