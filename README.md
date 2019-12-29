Theme for react app.

Check theme [demo](http://matviiv.com/omtv-theme).

# Install
```
npm i omtv-theme
```

# Use
```
import React from 'react';
import ReactDOM from 'react-dom';

import {
  GlobalStyle, Button, A,
  H1, H2, H3, H4, H5, H6,
} from 'omtv-theme';
import {
  Article, Code, Header, Component, Comment,
} from 'omtv-theme/theme/demoArticle';

const App = () => (
  <>
    <GlobalStyle />
    <H1>App header</H1>
    <H2>header2</H2>
    <H3>header3</H3>
    <H4>header4</H4>
    <H5>header5</H5>
    <H5>header6</H6>
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
```

Theme is not bundled or compiled, It is provided in raw form as is
(see `theme/` folder).
The project that is going to use this theme should bundle and
complie theme itself, here are the instructions for webpack and babel:
```webpack.config.js
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/my-component'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            ...
          },
        },
      },
    ],
  },
  ...
};
```
You can also use [omtv-template-react](https://github.com/omatviiv/omtv-template-react)
for your project, it's webpack/babel config is compatible with this approach.

# Static type checking
Theme contains [Flow Comment Types](https://flow.org/en/docs/types/comments/)
that allows either to use flow static typechecking or simply ignore it.

# Improve
1. Install dependencies `npm i`.
2. Start webpack dev server for demo project `npm run demo`.
3. (optional) Start jest in watch mode `npm run jest`.
4. Improve component.
5. (optional) Publish component demo:
  `npm run publish-demo` will try to publish demo
  create scripts/secret.js file
  ```
    module.exports = {
      pwd: '', // leave this field empty if you want script to prompt for password
      host: 'your.host.com', // default port 22, specify other port: 'your.host:222'
    };
  ```
  Scripts/secret.js is added to gitignore.
