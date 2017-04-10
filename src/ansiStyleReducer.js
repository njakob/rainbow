/* @flow */

import { inspect } from 'util';
import ansiStyles from 'ansi-styles';
import type { StyleReducer, StyledString } from './types';
import StyleNode from './StyleNode';

const backgroundsMapping = {
  black: 'bgBlack',
  red: 'bgRed',
  green: 'bgGreen',
  yellow: 'bgYellow',
  blue: 'bgBlue',
  magenta: 'bgMagenta',
  cyan: 'bgCyan',
  white: 'bgWhite',
};

function isString(value: mixed): boolean {
  return value === 'string' || value instanceof String;
}

export default function ansiStyleReducer(): StyleReducer {
  return (styled: StyledString, value: mixed): StyledString => {
    if (typeof value === 'number' || isString(value)) {
      // eslint-disable-next-line no-param-reassign
      styled.value += String(value);
    } else if (value instanceof StyleNode) {
      const { text, style } = value;
      let output = '';

      if (style.color) {
        output += ansiStyles[style.color].open;
      }
      if (style.background) {
        output += ansiStyles[backgroundsMapping[style.background]].open;
      }
      if (style.weight) {
        output += ansiStyles[style.weight].open;
      }
      if (style.style) {
        output += ansiStyles[style.style].open;
      }
      if (style.inverse) {
        output += ansiStyles.inverse.open;
      }
      if (style.hidden) {
        output += ansiStyles.hidden.open;
      }
      if (style.decoration) {
        output += ansiStyles[style.decoration].open;
      }

      output += text;
      output += ansiStyles.reset.close;

      // eslint-disable-next-line no-param-reassign
      styled.value += output;
    } else {
      // eslint-disable-next-line no-param-reassign
      styled.value += inspect(value, { colors: true, depth: null });
    }

    return styled;
  };
}
