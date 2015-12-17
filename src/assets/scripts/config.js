require.config({

    baseUrl: 'assets/scripts/',

    paths: {
        requirejs: '',
        jquery: '../vendor/jquery/dist/jquery.min',
        handlebars: '../vendor/handlebars/handlebars',
        structurejs: '../vendor/structurejs/js/'
    },

    shim: {
        jquery: { exports: '$' }
    },

    waitSeconds: 120,

    packages: []
});
