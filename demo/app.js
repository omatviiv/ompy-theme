// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import {
  GlobalStyle, Article, Code, MainHeader, Header, Button,
  Comment, A, Component,
} from 'theme';

const App = () => (
  <>
    <GlobalStyle />
    <MainHeader>
      App header
    </MainHeader>
    <Article>
      <Header bookmark='article1'>Article header</Header>
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
