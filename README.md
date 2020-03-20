<p align="center">
  <img src="https://cdn.rawgit.com/siddharthkp/bundlesize/master/art/logo.png" height="200px">
  <br><br>
  <b>Keep your library size in check based on bundlesize</b>
  <br>
</p>

&nbsp;

[![Build Status](https://travis-ci.org/siddharthkp/bundlesize.svg?branch=master)](https://travis-ci.org/siddharthkp/bundlesize)
[![Backers on Open Collective](https://opencollective.com/bundlesize/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/bundlesize/sponsors/badge.svg)](#sponsors) [![Greenkeeper badge](https://badges.greenkeeper.io/siddharthkp/bundlesize.svg)](https://greenkeeper.io/)
[![NPM Version](https://img.shields.io/npm/v/bundlesize.svg)](https://npmjs.org/package/bundlesize)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Join us on Slack](https://bundlesize.now.sh/badge.svg)](https://bundlesize.now.sh/)

[![NPM Downloads](https://img.shields.io/npm/dm/bundlesize.svg?style=flat)](https://www.npmjs.com/package/bundlesize)
&nbsp;

#### minimal setup

```sh
npm install bundlesize --save-dev
```

&nbsp;

#### usage

Add it to your scripts in `package.json`

```json
"scripts": {
  "test": "bundlesize"
}
```

&nbsp;

Or you can use `npx` with [NPM 5.2+](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).

```sh
npx bundlesize
```

#### configuration

&nbsp;

#### 1) Add the path and maxSize in your `package.json`.

By default the gzipped size is tested. You can use the `compression` option to change this. (`gzip`, `brotli`, or `none`).

```json
{
  "name": "your cool library",
  "version": "1.1.2",
  "bundlesize": [
    {
      "path": "./dist.js",
      "maxSize": "30 kB",
      "minSize": "3 kB"
    }
  ]
}
```

`bundlesize` also supports [glob patterns](https://github.com/isaacs/node-glob)

Example:

```json
"bundlesize": [
  {
    "path": "./dist/vendor-*.js",
    "maxSize": "30 kB",
    "minSize": "3 kB",
  },
  {
    "path": "./dist/chunk-*.js",
    "maxSize": "20 kB",
    "minSize": "2 kB",
  }
]

```

You can check for minimum size too.

Example:

```json
"bundlesize": [
  {
    "path": "./dist.js",
    "maxSize": "100 kB",
    "minSize": "2 kB"
  },
  {
    "path": [
        "./src/compressed-size.js",
        "./src/files.js",
        "./index.js"
      ],
    "minSize": "1B",
    "maxSize": "1MB",
    "compression": "none"
  }
]

```

This makes it great for using with applications that are bundled with another tool. It will match multiple files if necessary and create a new row for each file.

&nbsp;

#### CLI

example usage:

```sh
bundlesize -f "dist/*.js" -s 20kB
bundlesize -f "dist/*.js" -s 20kB --min-size 15kB
```

For more granular configuration, we recommend configuring it in the `package.json` (documented above).

&nbsp;

#### like it?

:star: this repo


#### TODO

- Work with other CI tools ([AppVeyor](https://www.appveyor.com/), etc.)
- Automate setup (setting env_var)

&nbsp;

#### similar projects

- [BuildSize](https://buildsize.org/) - GitHub App, no manual configuration required
- [travis-weigh-in](https://github.com/danvk/travis-weigh-in) - Uses Python rather than Node.js
- [size-limit](https://github.com/ai/size-limit) - Uses webpack, builds your files for you.


#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
