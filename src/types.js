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

export interface Styler {
  (value: string): StyleNode;
  get black(): Styler;
  get red(): Styler;
  get green(): Styler;
  get yellow(): Styler;
  get blue(): Styler;
  get magenta(): Styler;
  get cyan(): Styler;
  get white(): Styler;
  get gray(): Styler;
  get bgBlack(): Styler;
  get bgRed(): Styler;
  get bgGreen(): Styler;
  get bgYellow(): Styler;
  get bgBlue(): Styler;
  get bgMagenta(): Styler;
  get bgCyan(): Styler;
  get bgWhite(): Styler;
  get bold(): Styler;
  get dim(): Styler;
  get italic(): Styler;
  get inverse(): Styler;
  get hidden(): Styler;
  get strikethrough(): Styler;
  get underline(): Styler;
};

export type StyleReducer = (styled: StyledString, value: mixed) => StyledString;

export type StylerProperties = { [key: string]: Styler; };
