

module.exports = function(grunt) {


  var includeAll;
  try {
    includeAll = require('include-all');
  } catch (e0) {
    try {
      includeAll = require('sails/node_modules/include-all');
    } catch (e1) {
      console.error('Could not find `include-all` module.');
      console.error('Skipping grunt tasks...');
      console.error('To fix this, please run:');
      console.error('npm install include-all --save`');
      console.error();

      grunt.registerTask('default', []);
      return;
    }
  }


  /**
   * Loads Grunt configuration modules from the specified
   * relative path. These modules should export a function
   * that, when run, should either load/configure or register
   * a Grunt task.
   */
  function loadTasks(relPath) {
    return includeAll({
      dirname: require('path').resolve(__dirname, relPath),
      filter: /(.+)\.js$/,
      excludeDirs: /^\.(git|svn)$/
    }) || {};
  }

  /**
   * Invokes the function from a Grunt configuration module with
   * a single argument - the `grunt` object.
   */
  function invokeConfigFn(tasks) {
    for (var taskName in tasks) {
      if (tasks.hasOwnProperty(taskName)) {
        tasks[taskName](grunt);
      }
    }
  }



  // Load task functions
  var taskConfigurations = loadTasks('./tasks/config'),
    registerDefinitions = loadTasks('./tasks/register');

  // (ensure that a default task exists)
  if (!registerDefinitions.default) {
    registerDefinitions.default = function(grunt) {
      grunt.registerTask('default', []);
    };
  }

  // Run task functions to configure Grunt.
  invokeConfigFn(taskConfigurations);
  invokeConfigFn(registerDefinitions);

};
