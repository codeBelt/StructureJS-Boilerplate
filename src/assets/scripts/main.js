'use strict';

//import $ = from 'jquery';
var $ = require('jquery');
import {TestApp} from './TestApp';

$(document).ready(function () {

    window.app = new TestApp();
    window.app.appendTo('body');    // Need to specify what area our code has control over.
                                    // The App.js class extends Stage which has the appendTo method.
                                    // Note: On typical website you may want to set it as 'body' do you have control over the whole page.
});
