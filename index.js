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

  const createTest = function (title, input, expected) {
    // If there is no title, use input as title
    if (title && input && !expected) {
      expected = input;
    }
    test(title, function (t) {
      t.is(runPlugin(plugin, input), expected);
    });
  };
  return {
    testChanged: createTest,
    testUnchanged: (title, input) => {
      if (title && !input) {
        input = title;
      }
      return createTest(title, input, input);
    }
  };
}

module.exports = testPlugin;
