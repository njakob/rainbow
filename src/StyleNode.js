/* @flow */

import type { Style } from './types';

export default class StyleNode {
  children: Array<StyleNode>;
  style: Style;
  value: mixed;

  constructor(
    value: ?mixed,
    children?: Array<StyleNode> = [],
    style?: Style = {},
  ) {
    this.value = value;
    this.children = children;
    this.style = style;
  }

  assignStyle(other: Style): this {
    this.style = { ...this.style, ...other };
    return this;
  }

  appendChild(node: StyleNode): this {
    this.children.push(node);
    return this;
  }
}
