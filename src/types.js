/* @flow */

import type StyleNode from './StyleNode';

export type Style = {
  color?: string;
  background?: string;
  weight?: string;
  style?: string;
  inverse?: boolean;
  hidden?: boolean;
  decoration?: string;
};

export type StyledString = {
  value: string;
  attributes: Array<mixed>;
};

export type Styles = {
  black: Style;
  red: Style;
  green: Style;
  yellow: Style;
  blue: Style;
  magenta: Style;
  cyan: Style;
  white: Style;
  gray: Style;
  bgBlack: Style;
  bgRed: Style;
  bgGreen: Style;
  bgYellow: Style;
  bgBlue: Style;
  bgMagenta: Style;
  bgCyan: Style;
  bgWhite: Style;
  bold: Style;
  dim: Style;
  italic: Style;
  inverse: Style;
  hidden: Style;
  strikethrough: Style;
  underline: Style;
};

export type StyleReducer = (styled: StyledString, value: mixed) => StyledString;
