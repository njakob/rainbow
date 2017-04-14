/* @flow */

import type { StyleFormatter, StyledString } from './types';
import StyleNode from './StyleNode';
import createProperties from './createProperties';
import parse from './parse';

export default class Rainbow {
  formatter: StyleFormatter;

  constructor(formatter: StyleFormatter) {
    Object.defineProperties(this, createProperties());
    this.formatter = formatter;
  }

  format(strings: Array<string>, ...values: Array<mixed>): StyledString {
    const styled: StyledString = { value: '', attributes: [] };
    return this.formatter(styled, parse(new StyleNode(), strings, values));
  }
}
