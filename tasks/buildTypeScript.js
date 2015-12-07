/*jshint node:true, laxbreak:true */
'use strict';

module.exports = function(grunt) {

    grunt.config.merge({
        /**
         * Takes our CommonJS files and compiles them together.
         */
        browserify: {
            web: {
                options: {
                    preBundleCB: function(bundle) {
                        bundle.plugin('tsify', {
                            removeComments: false,
                            noImplicitAny: false,
                            target: 'ES3'
                        });
                    }
                },
                files: {
                    'web/assets/scripts/main.js': ['src/assets/scripts/main.ts']
                }
            }
        }
    });

    grunt.registerTask('buildTypeScript',
        ['browserify']
    );
};
