// Imports
import $ = require('jquery');
import TestApp = require('./TestApp');

$(document).ready(function() {
    var app = new TestApp();
    app.appendTo('body');   // Need to specify what area our code has control over.
                            // The TestApp.js class extends Stage which has the appendTo method.
                            // Note: On typical website you may want to set it as 'body' do you have control over the whole page.

    window['app'] = app;
});