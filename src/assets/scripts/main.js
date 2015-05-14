require(
    // The only purpose of this file is to kick off your application's top-level
    // controller at the appropriate time. All other code should be written as
    // separate modules in their own files.
    //
    // Note that since this is the application entry-point, traditional
    // RequireJS syntax is used here to specify dependencies. Do not use this
    // syntax in any other modules.
    [
        'jquery',
        './TestApp'
    ],
    function(
        $,
        TestApp
    ) {
        'use strict';
        $(document).ready(function () {

            window.app = new TestApp();
            window.app.appendTo('body');    // Need to specify what area our code has control over.
                                            // The TestApp.js class extends Stage which has the appendTo method.
                                            // Note: On typical website you may want to set it as 'body' do you have control over the whole page.
        });
    }
);
