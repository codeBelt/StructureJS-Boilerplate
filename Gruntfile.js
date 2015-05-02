module.exports = function(grunt) {

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
                },
                bundleOptions: {
                    debug: true
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
                        '!assets/vendor/structurejs/**/*.css'
                    ]
                }]
            }
        },

        /**
         * Creates a node.js Express Server to test our code in a server like environment.
         * Note: We are using the watch task to keep the server running.
         */
        express: {
            src: {
                options: {
                    port: 8000,
                    hostname: "0.0.0.0",
                    bases: ['src/'],
                    livereload: true
                }
            }
        },

        /**
         * Opens the index.html file in the default browser after the node.js Express Server is running.
         */
        open: {
            src: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= express.src.options.port%>'
            }
        },

        watch: {
            src: {
                options: {
                    livereload: true
                },
                files: ['src/**/*.html', 'src/**/*.css'],
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
        'copy'
    ]);

    grunt.registerTask('launch', [
        'clean',
        'browserify',
        'handlebars',
        'copy',
        'express',
        'open',
        'watch'
    ]);


};
