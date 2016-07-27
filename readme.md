# jscodeshift-ava-tester [![Build Status](https://travis-ci.org/jfmengels/jscodeshift-ava-tester.svg?branch=master)](https://travis-ci.org/jfmengels/jscodeshift-ava-tester)

> jscodeshift wrapper to write smaller and better tests for your codemods


## Install

```
$ npm install --save jscodeshift-ava-tester
```


## Usage

```js
const jscodeshiftAvaTester = require('jscodeshift-ava-tester');

jscodeshiftAvaTester('unicorns');
//=> 'unicorns & rainbows'
```


## API

### jscodeshiftAvaTester(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## License

MIT © [Jeroen Engels](https://github.com/jfmengels)
