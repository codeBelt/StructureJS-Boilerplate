module.exports = function(grunt) {

    var remapify = require('remapify');

    // Uncomment the next line to report the Grunt execution time (for optimization, etc)
    //require('time-grunt')(grunt);

    // Intelligently lazy-loads tasks and plugins as needed at runtime.
    require('jit-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({

        //Read the package.json
        pkg: grunt.file.readJSON('package.json'),

        /**
         * A code block that will be added to our minified code files.
         * Gets the name and appVersion and other info from the above loaded 'package.json' file.
         * How to use: '<%= banner %>'
         */
        banner: [
            '/*',
            ' * THIS FILE HAS BEEN GENERATED BY AN AUTOMATED TOOL.',
            ' * DO NOT MODIFY DIRECTLY. INSTEAD, MODIFY THE APPROPRIATE SOURCE CODE.',
            ' *',
            ' * <%= pkg.name %> v<%= pkg.version %>',
            ' * <%= pkg.description %>',
            ' * Development By: <%= pkg.developedBy %>',
            ' * Build Date: <%= grunt.template.today("yyyy-mm-dd") %>',
            ' */',
            ''
        ].join('\n'),

        /**
         * Deletes our production folder before we create a new build.
         */
        clean: {
            web: ['web']
        },

        /**
         * Takes our CommonJS files and compiles them together.
         */
        browserify: {
            web: {
                options: {
                    preBundleCB: function(bundle) {
                        //bundle.plugin(remapify, [{
                        //    cwd: './src/assets/vendor/structurejs/ts',
                        //    src: '**/*.ts',
                        //    expose: 'structurejs'
                        //}]);
                            bundle.plugin('tsify', { });

                        //// Creates a CommonJS module around the script(s) in the file.
                        //bundle.require('./src/assets/scripts/templates.js');
                        //// Creates a alias for a library that is already CommonJS.

                    }
                },
                files: {
                    'web/assets/scripts/main.js': ['src/assets/scripts/App.ts']
                }
            }
        },

        /**
         * Compiles the Handlebars templates into pre-compiled handlebars templates
         */
        handlebars: {
            compile: {
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
                    'src/assets/scripts/templates.js': 'src/assets/templates/**/*.hbs'
                }
            }
        },

        /**
         * Copy and needed files to the web folder.
         */
        copy: {
            styles: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    dest: 'web/',
                    src: [
                        'index.html',
                        'assets/media/**',
                        'assets/vendor/todomvc-common/bg.png',
                        'assets/{styles,vendor}/**/*.css',
                        'assets/vendor/jquery/dist/jquery.js',
                        '!assets/vendor/structurejs/**'
                    ]
                }]
            }
        },

        /**
         * Merge and files with the generated Browserify file.
         */
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'src/assets/vendor/handlebars/handlebars.runtime.min.js',
                    'web/assets/scripts/main.js'
                ],
                dest: 'web/assets/scripts/main.js'
            }
        },

        /**
         * Creates a node.js Express Server to test our code in a server like environment.
         * Note: We are using the watch task to keep the server running.
         */
        express: {
            web: {
                options: {
                    port: 8000,
                    hostname: "0.0.0.0",
                    bases: ['web/'],
                    livereload: true
                }
            }
        },

        /**
         * Opens the index.html file in the default browser after the node.js Express Server is running.
         */
        open: {
            web: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= express.web.options.port%>'
            }
        },

        /**
         * Watches files and will run task(s) when files are changed. It will also reload/refresh the browser.
         */
        watch: {
            markup: {
                options: {
                    livereload: true
                },
                files: ['src/**/*.html', 'src/**/*.css'],
                tasks: ['copy']
            },
            script: {
                options: {
                    livereload: true
                },
                files: ['src/**/*.ts'],
                tasks: ['browserify', 'copy', 'concat']
            },
            templates: {
                options: {
                    livereload: true
                },
                files: ['src/**/*.hbs'],
                tasks: ['handlebars']
            }
        }
    });

    /**
     * Grunt tasks:
     *
     * grunt            (Will build code for production)
     * grunt launch     (Will build code for production and open the browser with the application)
     */
    grunt.registerTask('default', [
        'clean',
        'browserify',
        'handlebars',
        'copy',
        'concat'
    ]);

    grunt.registerTask('launch', [
        'clean',
        'browserify',
        'handlebars',
        'copy',
        'concat',
        'express',
        'open',
        'watch'
    ]);

};
