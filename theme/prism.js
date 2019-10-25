// @flow
import {
  white, whiteDark, whiteLight, black, blackDark, blue, blueDark,
  red, redDark, cyan, cyanDark, yellow, yellowDark, green, greenDark,
  magenta, magentaDark, ugly,
} from 'demo/theme/colors';

export default {
  'pre[class*="language-"]': {
    'gridArea': 'code',
    'color': white,
    'fontFamily': '"Ubuntu Mono", Consolas, monospace',
    'fontSize': '1rem',
    'direction': 'ltr',
    'textAlign': 'left',
    'whiteSpace': 'pre',
    'wordSpacing': 'normal',
    'wordBreak': 'normal',
    'lineHeight': '1.1',
    'MozTabSize': '2',
    'OTabSize': '2',
    'tabSize': '2',
    'WebkitHyphens': 'none',
    'MozHyphens': 'none',
    'msHyphens': 'none',
    'hyphens': 'none',
    'padding': '0 0 0 .5rem',
    'overflow': 'auto',
    'background': black,
    'margin': '0',
  },
  'code[class*="language-"]': {
    'color': white,
    'fontFamily': '"Ubuntu Mono", Consolas, monospace',
    'fontSize': '1em',
    'direction': 'ltr',
    'textAlign': 'left',
    'whiteSpace': 'pre',
    'wordSpacing': 'normal',
    'wordBreak': 'normal',
    'lineHeight': '1.1',
    'MozTabSize': '2',
    'OTabSize': '2',
    'tabSize': '2',
    'WebkitHyphens': 'none',
    'MozHyphens': 'none',
    'msHyphens': 'none',
    'hyphens': 'none'
  },
  ':not(pre) > code[class*="language-"]': {
    'background': black,
  },
  'punctuation': {
    'color': whiteDark,
  },
  'keyword': {
    'color': magenta,
  },
  'boolean': {
    'color': green,
  },
  'number': {
    'color': green,
  },
  'constant': {
    'color': cyan,
  },
  'string': {
    'color': red,
  },
  'operator': {
    'color': blue,
  },
  'comment': {
    'color': blue,
  },
  'important': {
    'color': redDark,
    'fontWeight': 'bold',
  },
  'property': {
    'color': green,
  },
  'function': {
    'color': yellow,
  },
  'regex': {
    'color': redDark,
  },
  'prolog': {
    'color': ugly,
  },
  'doctype': {
    'color': ugly,
  },
  'cdata': {
    'color': ugly,
  },
  '.namespace': {
    'Opacity': '.7'
  },
  'tag': {
    'color': ugly,
  },
  'class-name': {
    'color': ugly,
    'textDecoration': 'underline'
  },
  'symbol': {
    'color': ugly,
  },
  'deleted': {
    'color': ugly,
  },
  'selector': {
    'color': ugly,
  },
  'attr-name': {
    'color': '@'
  },
  'char': {
    'color': ugly,
  },
  'builtin': {
    'color': ugly,
  },
  'inserted': {
    'color': ugly,
  },
  'variable': {
    'color': ugly,
  },
  'entity': {
    'color': ugly,
    'cursor': 'help',
  },
  'url': {
    'color': ugly,
  },
  '.language-css .token.string': {
    'color': ugly,
  },
  '.style .token.string': {
    'color': ugly,
  },
  'atrule': {
    'color': ugly,
  },
  'attr-value': {
    'color': ugly,
  },
  'bold': {
    'fontWeight': 'bold'
  },
  'italic': {
    'fontStyle': 'italic'
  }
};
