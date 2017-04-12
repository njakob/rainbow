/* @flow */

import StyleNode from './StyleNode';
import styles from './styles';

export default function createProperties(): any {
  const properties = {};

  Object.keys(styles).forEach((key: string) => {
    function builder(node: StyleNode = new StyleNode()): Function {
      node.assignStyle(styles[key]);

      function fn(value: string): StyleNode {
        return node.setText(value);
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
