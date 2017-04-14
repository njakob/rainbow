/* @flow */

import StyleNode from './StyleNode';
import styles from './styles';
import parse from './parse';

export default function createProperties(): any {
  const properties = {};

  Object.keys(styles).forEach((key: string) => {
    function builder(node: StyleNode = new StyleNode()): Function {
      node.assignStyle(styles[key]);

      function fn(strings: Array<string>, ...values: Array<mixed>): StyleNode {
        return parse(node, strings, values);
      }

      fn.node = node;
      Object.defineProperties(fn, properties);

      return fn;
    }

    properties[key] = {
      // eslint-disable-next-line object-shorthand, func-names
      get: function (): any {
        return builder(this.node);
      }
    };
  });

  return properties;
}
