/*jshint node:true, laxbreak:true */
'use strict';

module.exports = function(grunt) {
    var pkg = require('../package.json');

    grunt.config.merge({
        // Injects version number.
        'string-replace': {
            precompileJst: {
                options: {
                    replacements: [{
                        pattern: /@@version/g,
                        replacement: pkg.version
                    }]
                },
                files: [{
                    expand: true,
                    cwd: 'src/templates/precompile/',
                    dest: '.tmp/templates/precompile/',
                    src: ['**/*.hbs']
                }]
            }
        },

        handlebars: {
            precompileJst: {
                options: {
                    //amd: ['handlebars'],
                    namespace: 'JST',
                    // Registers all files that start with '_' as a partial.
                    partialRegex: /^_/,
                    // Shortens the file path for the templates.
                    processName: function(filePath) { // input:  src/templates/_header.hbs
                        return filePath.slice(filePath.indexOf('template'), filePath.lastIndexOf('.')); // output: templates/_header
                    },
                    // Shortens the file path for the partials.
                    processPartialName: function(filePath) { // input:  src/templates/_header.hbs
                        return filePath.slice(filePath.indexOf('template'), filePath.lastIndexOf('.')); // output: templates/_header
                    }
                },
                files: {
                    'web/assets/scripts/precompiledJst.js': '.tmp/templates/precompile/**/*.hbs'
                }
            }
        },

        // Compiles Handlebars hbs templates into JavaScript (JST)
        copy: {
            precompileJst: {
                files: [{
                    expand: true,
                    cwd: '.tmp/',
                    dest: 'src/',
                    src: ['assets/scripts/precompiledJst.js']
                }]
            }
        }

    });

    grunt.registerTask('precompileJst', [
        'string-replace:precompileJst',
        'handlebars:precompileJst',
        //'copy:precompileJst'
    ]);
};
