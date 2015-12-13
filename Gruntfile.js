module.exports = function(grunt) {

    // -- Plugins --------------------------------------------------------------
    // Uncomment the next line to report the Grunt execution time (for optimization, etc)
    //require('time-grunt')(grunt);

    // Intelligently lazy-loads tasks and plugins as needed at runtime.
    require('jit-grunt')(grunt)({ customTasksDir: 'tasks' });

    // -- Options --------------------------------------------------------------
    // All builds are considered to be development builds, unless they're not.
    grunt.option('dev', !grunt.option('prod'));

    // -- Configuration --------------------------------------------------------
    grunt.initConfig({

        // Load `package.json`so we have access to the project metadata such as name and version number.
        pkg: grunt.file.readJSON('package.json'),

        // Load `build-env.js`so we have access to the project environment configuration and constants.
        env: require('./build-env'),

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
            before: ['web', '.tmp']
        },

        /**
         * Copy and needed files to the web folder.
         */
        copy: {
            data: {
                files: [{
                    expand: true,
                    cwd: '<%= env.DIR_SRC %>',
                    dest: '<%= env.DIR_DEST %>',
                    src: [
                        'assets/data/**/*',
                        'assets/media/**'
                    ]
                }]
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
                files: ['<%= env.DIR_SRC %>/**/*.html', '<%= env.DIR_SRC %>/**/*.css'],
                tasks: ['copy']
            },
            script: {
                options: {
                    livereload: true
                },
                files: ['<%= env.DIR_SRC %>/**/*.js'],
                tasks: ['buildBabel']
            },
            templates: {
                options: {
                    livereload: true
                },
                files: ['<%= env.DIR_SRC %>/**/*.hbs'],
                tasks: ['precompileJst']
            }
        }
    });

    /**
     * Grunt tasks:
     *
     * grunt                (Will build code for production)
     * grunt launch         (Will build code for production and watch files)
     * grunt launch --open  (Will build code for production and watch files then opens a tab in your default browser)
     */
    grunt.registerTask('default', [
        'clean:before',
        'buildMarkup',
        'precompileJst',
        'buildStyles',
        'buildBrowserify',
        'copy:data'
    ]);

    grunt.registerTask('launch', 'Runs build, launches http-server, watches for file changes', [
        'default',
        'connectHttp',
        'watch'
    ]);

    grunt.loadNpmTasks('grunt-contrib-watch');

};
