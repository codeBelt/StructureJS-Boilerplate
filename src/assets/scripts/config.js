require.config({

    baseUrl: 'assets/scripts/',

    paths: {
        requirejs: '../vendor/requirejs/require',
        jquery: '../vendor/jquery/dist/jquery.min',
        handlebars: '../vendor/handlebars/handlebars.min',
        structurejs: '../vendor/structurejs/js'
    },

    shim: {
        jquery: { exports: '$' },
        handlebars: { exports: 'Handlebars' }
    },

    waitSeconds: 120,

    packages: []
});
