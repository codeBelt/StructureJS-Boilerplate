import TestApp from './TestApp';

window.app = new TestApp();
window.app.appendTo('body');    // Need to specify what area our code has control over.
                                // The App.js class extends Stage which has the appendTo method.
