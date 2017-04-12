/* @flow */

import type { StyleReducer, StyledString } from './types';
import createProperties from './createProperties';
import parse from './parse';

export default class Rainbow {
  styleReducer: StyleReducer;

  constructor(styleReducer: StyleReducer) {
    Object.defineProperties(this, createProperties());
    this.styleReducer = styleReducer;
  }

  format(values: Array<string>, ...keys: Array<mixed>): StyledString {
    return parse(values, keys, this.styleReducer);
  }
}
