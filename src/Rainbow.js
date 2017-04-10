/* @flow */

import type { StyleReducer, StyledString, Styler, StylerProperties } from './types';
import createProperties from './createProperties';
import parse from './parse';

export default class Rainbow implements Styler {
  styleReducer: StyleReducer;
  properties: StylerProperties;

  constructor(styleReducer: StyleReducer) {
    this.properties = createProperties();
    Object.defineProperties(this, this.properties);
    this.styleReducer = styleReducer;
  }

  format(values: Array<string>, ...keys: Array<mixed>): StyledString {
    return parse(values, keys, value => this.styleReducer(value));
  }

  get black(): Styler {
    return this.properties.black;
  }
  get red(): Styler {
    return this.properties.red;
  }
  get green(): Styler {
    return this.properties.green;
  }
  get yellow(): Styler {
    return this.properties.yellow;
  }
  get blue(): Styler {
    return this.properties.blue;
  }
  get magenta(): Styler {
    return this.properties.magenta;
  }
  get cyan(): Styler {
    return this.properties.cyan;
  }
  get white(): Styler {
    return this.properties.white;
  }
  get gray(): Styler {
    return this.properties.gray;
  }
  get bgBlack(): Styler {
    return this.properties.bgBlack;
  }
  get bgRed(): Styler {
    return this.properties.bgRed;
  }
  get bgGreen(): Styler {
    return this.properties.bgGreen;
  }
  get bgYellow(): Styler {
    return this.properties.bgYellow;
  }
  get bgBlue(): Styler {
    return this.properties.bgBlue;
  }
  get bgMagenta(): Styler {
    return this.properties.bgMagenta;
  }
  get bgCyan(): Styler {
    return this.properties.bgCyan;
  }
  get bgWhite(): Styler {
    return this.properties.bgWhite;
  }
  get bold(): Styler {
    return this.properties.bold;
  }
  get dim(): Styler {
    return this.properties.dim;
  }
  get italic(): Styler {
    return this.properties.italic;
  }
  get inverse(): Styler {
    return this.properties.inverse;
  }
  get hidden(): Styler {
    return this.properties.hidden;
  }
  get strikethrough(): Styler {
    return this.properties.strikethrough;
  }
  get underline(): Styler {
    return this.properties.underline;
  }
}
