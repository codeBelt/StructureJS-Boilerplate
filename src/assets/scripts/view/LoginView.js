'use strict';

// Imports
var Extend = require('structurejs/util/Extend');
var DOMElement = require('structurejs/display/DOMElement');

/**
 * TODO: YUIDoc_comment
 *
 * @class LoginView
 * @extends DOMElement
 * @constructor
 **/
var LoginView = (function () {

    var _super = Extend(LoginView, DOMElement); // jshint ignore:line

    function LoginView() { // jshint ignore:line
        _super.call(this);
    }

    /**
     * @overridden DOMElement.create
     */
    LoginView.prototype.create = function () {
        _super.prototype.create.call(this, 'templates/login/LoginTemplate');

        // Create or setup objects in this parent class.
    };

    /**
     * @overridden DOMElement.enable
     */
    LoginView.prototype.enable = function () {
        if (this.isEnabled === true) { return this; }

        // Enable the child objects and/or add any event listeners.

        return _super.prototype.enable.call(this);
    };

    /**
     * @overridden DOMElement.disable
     */
    LoginView.prototype.disable = function () {
        if (this.isEnabled === false) { return this; }

        // Disable the child objects and/or remove any event listeners.

        return _super.prototype.disable.call(this);
    };

    /**
     * @overridden DOMElement.layout
     */
    LoginView.prototype.layout = function () {
        // Layout or update the objects in this parent class.

        return this;
    };

    /**
     * @overridden DOMElement.destroy
     */
    LoginView.prototype.destroy = function () {
        // Call destroy on any child objects.
        // This super method will also null out your properties for garbage collection.

        _super.prototype.destroy.call(this);
    };

    return LoginView;
})();

module.exports = LoginView;
