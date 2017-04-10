/* @flow */

import type { StyledString, StyleReducer } from './types';

export default function parse(
  values: Array<string>,
  keys: Array<mixed>,
  styleReducer: StyleReducer,
): StyledString {
  const length = values.length;
  const styled: StyledString = { value: '', attributes: [] };

  for (let i = 0; i < length; i += 1) {
    styled.value += values[i];

    if (i !== length - 1) {
      styleReducer(styled, keys[i]);
    }
  }

  return styled;
}
