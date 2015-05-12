// Imports
import $ = require('jquery');
import CommandPatternExample = require('./CommandPatternExample');

$(document).ready(function() {
    var app = new CommandPatternExample();
    app.appendTo('body');

    window['app'] = app;
});
