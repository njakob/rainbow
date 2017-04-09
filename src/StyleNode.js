/* @flow */

import type { Style } from './types';

export default class StyleNode {
  style: Style;
  text: ?string;

  constructor(
    otherText: ?string = null,
    otherStyle: Style = {},
  ) {
    this.text = otherText;
    this.style = otherStyle;
  }

  assignStyle(other: Style): this {
    this.style = {
      ...this.style,
      ...other,
    };
    return this;
  }

  setText(other: string): this {
    this.text = other;
    return this;
  }
}
