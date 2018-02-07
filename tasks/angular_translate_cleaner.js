/*
 * grunt-angular-translate-cleaner
 * https://github.com/eranbo/grunt-angular-translate-cleaner
 *
 * Copyright (c) 2018 eranbo
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');

function iterateResourceFile(resourceFile, prefixToDelete) {
  for (let key in resourceFile) {
    if (typeof resourceFile[key] === 'object') {
      iterateResourceFile(resourceFile[key], prefixToDelete);
    } else {
      if (resourceFile[key].startsWith(prefixToDelete)) {
        delete resourceFile[key];
      }
    }
  }
}

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('angular_translate_cleaner', 'For angular translate JSON resource files. Help in removing keys with defined prefix for production. This way you can you fallback language and leave in development the strings that needs to translate', function() {
    var options = this.options();
    grunt.log.writeln(JSON.stringify(options));
    let files = fs.readdirSync(options.resourceFolder);
    grunt.log.writeln(JSON.stringify(files));
    files.filter(file => file !== options.baseLanguageFile)
      .forEach(file => {
        grunt.log.writeln(file);
        let resrouceFile = require(`../${options.resourceFolder}/${file}`);
        iterateResourceFile(resrouceFile, options.prefixToDelete);
        fs.writeFileSync(`./${options.resourceFolder}/${file}`, JSON.stringify(resrouceFile), 'utf8');
      });
  });
};
