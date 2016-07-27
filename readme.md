# jscodeshift-ava-tester [![Build Status](https://travis-ci.org/jfmengels/jscodeshift-ava-tester.svg?branch=master)](https://travis-ci.org/jfmengels/jscodeshift-ava-tester)

> [`jscodeshift`] wrapper to write smaller and better tests for your codemods using [`AVA`]


## Install

```
$ npm install --save jscodeshift-ava-tester
```


## Usage

Let's say you want to write tests for a [`jscodeshift`] codemod in `<root>/lib/codemod-to-test.js`. You can create a test file `<root>/test/codemod-to-test.js` and write plenty of small tests to test your codemod as thoroughly as you want.

```js
import test from 'ava';
import jscodeshift from 'jscodeshift';
import testCodemod from 'jscodeshift-ava-tester';
import codemod from '../lib/codemod-to-test';

const {testChanged, testUnchanged} = testCodemod(jscodeshift, test, codemod);

// Let's assume `codemod` modifies `var` declarations to either `let` or `const`

// Test things that should be modified
testChanged('var foo = 2;', 'const foo = 2;');
testChanged('var foo;', 'let foo;');
testChanged('var foo = 2; foo = 3;', 'let foo = 2; foo = 3;');
testChanged('var foo = 2; foo++;', 'let foo = 2; foo++;');
testChanged('var foo = 2; foo++;', 'let foo = 2; foo++;');
// ...

// Test things that should stay as is
testUnchanged('const foo = 2;');
testUnchanged('let foo = 2;');
testUnchanged('let foo;');
// ...
```

You can then run [`AVA`] as you would for other [`AVA`] tests (using `ava` or maybe even `ava --watch`).


## API

### testCodemod(jscodeshift, test, codemod)

Return methods that run the codemod on the given input and assert whether modifications are made, using the [`jscodeshift`] and [`AVA`] modules that you provide.

#### jscodeshift

The [`jscodeshift`] module that you use in your project.

#### test

The [`AVA`] module that you use in your project.

#### codemod

The codemod to test.

#### Returns

An object containing two methods: `testChanged` and `testUnchanged`.

### testChanged(input, expectedOutput)

Create a test that ensures that the codemod modifies `input` to `expectedOutput`.

#### input

Mock content of an input file.

#### expectedOutput

Expected result of the codemod when given `input`.

### testUnchanged(input)

Create a test that ensures that the codemod does not modify `input`.

#### input

Mock content of an input file.

## Thanks

Special thanks to @jamestalmage who created the original script.

## License

MIT © [Jeroen Engels](https://github.com/jfmengels)

[`jscodeshift`]: https://github.com/facebook/jscodeshift
[`AVA`]: https://github.com/avajs/ava
