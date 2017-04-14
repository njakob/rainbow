/* @flow */

import { inspect } from 'util';
import ansiStyles from 'ansi-styles';
import type { StyleFormatter, StyledString } from './types';
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
  return typeof value === 'string' || value instanceof String;
}

export default function ansiStyleFormatter(): StyleFormatter {
  function formatter(styled: StyledString, node: StyleNode): StyledString {
    const { value, style } = node;

    let valueText = '';
    if (value !== undefined) {
      if (typeof value === 'number' || isString(value)) {
        valueText = String(value);
      } else {
        valueText = inspect(value, { colors: true, depth: null });
      }
    }

    let openText = '';
    let closeText = '';
    if (style.color) {
      openText += ansiStyles[style.color].open;
      closeText += ansiStyles[style.color].close;
    }
    if (style.background) {
      openText += ansiStyles[backgroundsMapping[style.background]].open;
      closeText += ansiStyles[backgroundsMapping[style.background]].close;
    }
    if (style.weight) {
      openText += ansiStyles[style.weight].open;
      closeText += ansiStyles[style.weight].close;
    }
    if (style.style) {
      openText += ansiStyles[style.style].open;
      closeText += ansiStyles[style.style].close;
    }
    if (style.inverse) {
      openText += ansiStyles.inverse.open;
      closeText += ansiStyles.inverse.close;
    }
    if (style.hidden) {
      openText += ansiStyles.hidden.open;
      closeText += ansiStyles.hidden.close;
    }
    if (style.decoration) {
      openText += ansiStyles[style.decoration].open;
      closeText += ansiStyles[style.decoration].close;
    }

    // eslint-disable-next-line no-param-reassign
    styled.value += openText;
    // eslint-disable-next-line no-param-reassign
    styled.value += valueText;

    node.children.forEach(child => formatter(styled, child));

    // eslint-disable-next-line no-param-reassign
    styled.value += closeText;

    return styled;
  }

  return formatter;
}
