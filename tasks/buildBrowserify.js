/*jshint node:true, laxbreak:true */
'use strict';

module.exports = function(grunt) {
    var remapify = require('remapify');
    var shouldMinify = !grunt.option('dev');

    // Help Grunt find the right plugins at runtime
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    // Clear out any previously generated usemin task configuration
    grunt.config.set('concat', undefined);
    grunt.config.set('uglify', undefined);

    grunt.config.merge({

        browserify: {
            buildBrowserify: {
                options: {
                    preBundleCB: function(bundle) {
                        bundle.plugin(remapify, [{
                            cwd: './src/assets/vendor/structurejs/js',
                            src: '**/*.js',
                            expose: 'structurejs'
                        }]);
                    }
                },
                files: {
                    '<%= env.DIR_DEST %>/assets/scripts/main.js': ['<%= env.DIR_SRC %>/assets/scripts/main.js']
                }
            }
        },

        // Searches for build comment blocks (`<!-- build:js -->`) and generates
        // the appropriate `concat` and `uglify` configuration.
        useminPrepare: {
            options: {
                root: '<%= env.DIR_SRC %>',
                staging: '<%= env.DIR_TMP %>',
                dest: '<%= env.DIR_DEST %>',
                flow: {
                    buildBrowserify: {
                        // Force js only
                        steps: { js: ['concat', 'uglifyjs'], css: [] },
                        post: {}
                    }
                }
            },
            buildBrowserify: ['<%= env.DIR_SRC %>/index.html']
        },

        concat: {
            options: {
                separator: ';'
            }
        },

        uglify: {
            options: {
                warnings: false,
                mangle: true
            }
        },

        // Copies static files for non-optimized builds
        copy: {
            buildBrowserify: {
                files: [{
                    expand: true,
                    cwd: '<%= env.DIR_SRC %>',
                    dest: '<%= env.DIR_DEST %>',
                    src: ['assets/{scripts,vendor}/**/*.{map,js}']
                }]
            }
        }

    });

    grunt.registerTask('scrub:buildBrowserify', function() {
        function scrub(name) {
            var config = JSON
                .stringify(grunt.config.get(name))
                .replace(/\?v=@@version/g, '');

            grunt.config.set(name, JSON.parse(config));
        }

        scrub('concat');
        scrub('uglify');
    });

    grunt.registerTask('buildBrowserify',
        shouldMinify
            ? [
            'browserify:buildBrowserify',
            'useminPrepare:buildBrowserify',
            'scrub:buildBrowserify',
            'concat:generated',
            'uglify:generated'
        ]
            : [
            'browserify:buildBrowserify',
            'copy:buildBrowserify'
        ]
    );

};
