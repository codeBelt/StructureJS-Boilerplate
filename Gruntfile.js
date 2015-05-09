module.exports = function(grunt) {

    var remapify = require('remapify');

    // Project configuration.
    grunt.initConfig({

        //Read the package.json
        pkg: grunt.file.readJSON('package.json'),

        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

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

        browserify: {
            web: {
                options: {
                    preBundleCB: function(bundle) {
                        bundle.require('./src/assets/vendor/handlebars/handlebars.runtime.min.js');
                        bundle.require('./src/assets/scripts/templates.js');
                        bundle.plugin(remapify, [{
                            cwd: './src/assets/vendor/structurejs/js',
                            src: '**/*.js',
                            expose: 'structurejs'
                        }]);
                    }
                },
                files: {
                    'web/assets/scripts/main.js': ['src/assets/scripts/main.js']
                }
            }
        },

        clean: {
            web: ['web']
        },

        copy: {
            styles: {
                files: [{
                    expand: true,
                    cwd: 'src',
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

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    //'src/assets/vendor/handlebars/handlebars.min.js',
                    //'src/assets/scripts/templates.js',
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

        watch: {
            src: {
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
                files: ['src/**/*.js'],
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

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    // Default task
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
