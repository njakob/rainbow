const fs = require('fs');
const parcel = require('@njakob/parcel');
const hulk = require('@njakob/hulk');
const rollupNodeResolve = require('rollup-plugin-node-resolve');
const rollupBabel = require('rollup-plugin-babel');
const rollupJSON = require('rollup-plugin-json');

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
const parcelData = parcel.parseParcel(pkg);

const commitHash = (() => {
  try {
    return fs.readFileSync('.commithash', 'utf-8').trim();
  } catch (err) {
    return 'unknown';
  }
})();

const banner = hulk.hulk({
  commitHash,
  name: parcelData.name.name,
  version: parcelData.version,
  repository: parcelData.homepage,
});

export default {
  entry: 'src/index.js',
  sourceMap: true,
  banner,
  moduleName: 'rainbow',

  plugins: [
    rollupNodeResolve({
      jsnext: true
    }),
    rollupJSON(),
    rollupBabel({
      babelrc: true,
    }),
  ],

  external: [
    'util',
    'ansi-styles',
  ],

  targets: [
    { dest: 'lib/rainbow.js', format: 'cjs' },
    { dest: 'lib/rainbow.es.js', format: 'es' },
  ]
};
