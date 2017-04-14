/* @flow */

import StyleNode from './StyleNode';

export default function parse(
  node: StyleNode,
  strings: Array<string>,
  values: Array<mixed>,
): StyleNode {
  const length = strings.length;

  for (let i = 0; i < length; i += 1) {
    node.appendChild(new StyleNode(strings[i]));

    if (i !== length - 1) {
      const value = values[i];

      if (value instanceof StyleNode) {
        node.appendChild(value);
      } else {
        node.appendChild(new StyleNode(value));
      }
    }
  }

  return node;
}
