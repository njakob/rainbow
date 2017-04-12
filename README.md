
# rainbow [![NPM version][npm-status-image]][npm] [![Build Status][build-status-image]][travis] [![ESLint Config][eslint-config-image]][github:eslint-config]

> String styling helpers based on [Chalk][github:chalk].

## Installation

With NPM:

```
$ npm install @njakob/rainbow
```

With Yarn:

```
$ yarn add @njakob/rainbow
```

## Usage

Rainbow relies on tagged template literals in order to generate _style nodes_. Theses nodes can then be formatted through a specific reducer and generate a _styled string_. When the `ansiStyleReducer` is used, the generated value directly can be logged with the `console` or `process.stdout` stream.

```js
import { Rainbow, ansiStyleReducer } from '@njakob/Rainbow';

const styles = new Rainbow(ansiStyleReducer);

const styledString = styles.format`Stuff to ${styles.red('log')} with some ${styles.bold.blue('colors')}`;

console.log(styledString.value);
process.stdout.write(`${styledString.value}\n`);
```

#### Colors

* `` styles.format`${styles.black('black')}` ``
* `` styles.format`${styles.red('red')}` ``
* `` styles.format`${styles.green('green')}` ``
* `` styles.format`${styles.yellow('yellow')}` ``
* `` styles.format`${styles.blue('blue')}` ``
* `` styles.format`${styles.cyan('cyan')}` ``
* `` styles.format`${styles.magenta('magenta')}` ``
* `` styles.format`${styles.white('white')}` ``
* `` styles.format`${styles.gray('gray')}` ``

#### Backgrounds

* `` styles.format`${styles.bgBlack('black')}` ``
* `` styles.format`${styles.bgRed('red')}` ``
* `` styles.format`${styles.bgGreen('green')}` ``
* `` styles.format`${styles.bgYellow('yellow')}` ``
* `` styles.format`${styles.bgBlue('blue')}` ``
* `` styles.format`${styles.bgCyan('cyan')}` ``
* `` styles.format`${styles.bgMagenta('magenta')}` ``
* `` styles.format`${styles.bgWhite('white')}` ``

#### Modifiers

* `` styles.format`${styles.bold('bold')}` ``
* `` styles.format`${styles.dim('dim')}` ``
* `` styles.format`${styles.italic('italic')}` ``
* `` styles.format`${styles.inverse('inverse')}` ``
* `` styles.format`${styles.hidden('hidden')}` ``
* `` styles.format`${styles.strikethrough('strikethrough')}` ``
* `` styles.format`${styles.underline('underline')}` ``

### Flowtype

In order for Flowtype to correctly parse the definition, the following option
must be added to your `.flowconfig`.


```
[options]
unsafe.enable_getters_and_setters=true
```

## Licences

`njakob/rainbow` is licensed under the [MIT License][licence].

[licence]: LICENSE
[github:eslint-config]: https://github.com/njakob/eslint-config
[github:chalk]: https://github.com/chalk/chalk
[npm]: https://nodei.co/npm/@njakob/rainbow
[travis]: https://travis-ci.org/njakob/rainbow
[npm-status-image]: https://img.shields.io/npm/v/@njakob/rainbow.svg
[build-status-image]: https://travis-ci.org/njakob/rainbow.svg?branch=master
[eslint-config-image]: https://img.shields.io/badge/eslint_config-njakob-463fd4.svg
