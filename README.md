
# rainbow [![NPM version][npm-status-image]][npm] [![Build Status][build-status-image]][travis] [![ESLint Config][eslint-config-image]][github:eslint-config] [![Conventional Commits][badge:conventional-commits]][conventional-commits]

> String styling helpers inspired by [Chalk][github:chalk].

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

Rainbow relies on tagged template literals in order to generate _style nodes_. Theses nodes can then be formatted through a specific function and generate a _styled string_.

```js
import { Rainbow, ansiStyleFormatter } from '@njakob/Rainbow';

const styles = new Rainbow(ansiStyleFormatter);

const styleNode = styles.parse`Stuff to ${styles.red`log`} with some ${styles.bold.blue`colors`}`;
const styledString = styles.format(styleNode);

console.log(styledString.value);
process.stdout.write(`${styledString.value}\n`);
```

#### Colors

* `` styles.parse`${styles.black`black`}` ``
* `` styles.parse`${styles.red`red`}` ``
* `` styles.parse`${styles.green`green`}` ``
* `` styles.parse`${styles.yellow`yellow`}` ``
* `` styles.parse`${styles.blue`blue`}` ``
* `` styles.parse`${styles.cyan`cyan`}` ``
* `` styles.parse`${styles.magenta`magenta`}` ``
* `` styles.parse`${styles.white`white`}` ``
* `` styles.parse`${styles.gray`gray`}` ``

#### Backgrounds

* `` styles.parse`${styles.bgBlack`black`}` ``
* `` styles.parse`${styles.bgRed`red`}` ``
* `` styles.parse`${styles.bgGreen`green`}` ``
* `` styles.parse`${styles.bgYellow`yellow`}` ``
* `` styles.parse`${styles.bgBlue`blue`}` ``
* `` styles.parse`${styles.bgCyan`cyan`}` ``
* `` styles.parse`${styles.bgMagenta`magenta`}` ``
* `` styles.parse`${styles.bgWhite`white`}` ``

#### Modifiers

* `` styles.parse`${styles.bold`bold`}` ``
* `` styles.parse`${styles.dim`dim`}` ``
* `` styles.parse`${styles.italic`italic`}` ``
* `` styles.parse`${styles.inverse`inverse`}` ``
* `` styles.parse`${styles.hidden`hidden`}` ``
* `` styles.parse`${styles.strikethrough`strikethrough`}` ``
* `` styles.parse`${styles.underline`underline`}` ``

### Flowtype

In order for Flowtype to correctly parse the definition, the following option
must be added to your `.flowconfig`.

```
[options]
unsafe.enable_getters_and_setters=true
```

## Changelog

See [changelog][CHANGELOG].

## Licences

`njakob/rainbow` is licensed under the [MIT License][licence].

[changelog]: CHANGELOG
[licence]: LICENSE
[github:eslint-config]: https://github.com/njakob/eslint-config
[github:chalk]: https://github.com/chalk/chalk
[npm]: https://nodei.co/npm/@njakob/rainbow
[travis]: https://travis-ci.org/njakob/rainbow
[conventional-commits]: https://conventionalcommits.org
[npm-status-image]: https://img.shields.io/npm/v/@njakob/rainbow.svg
[build-status-image]: https://travis-ci.org/njakob/rainbow.svg?branch=master
[eslint-config-image]: https://img.shields.io/badge/eslint_config-njakob-463fd4.svg
[badge:conventional-commits]: https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg
