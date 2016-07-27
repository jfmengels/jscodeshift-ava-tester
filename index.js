'use strict';

// simulate the fileInfo parameter
function fileInfo(path, source) {
  if (!source) {
    source = path;
    path = 'test.js';
  }

  return {
    path,
    source
  };
}

function testPlugin(jscodeshift, test, plugin) {
  const mockApi = {
    jscodeshift,
    stats: () => {}
  };

  function runPlugin(plugin, path, source) {
    return plugin(fileInfo(path, source), mockApi);
  }

  const createTest = function (input, expected) {
    test(input, function (t) {
      t.is(runPlugin(plugin, input), expected);
    });
  };
  return {
    testChanged: createTest,
    testUnchanged: input => createTest(input, input)
  };
}

module.exports = testPlugin;
