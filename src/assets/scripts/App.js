efine(function (require, exports, module) { // jshint ignore:line
    'use strict';

    // Imports
    var Extend = require('structurejs/util/Extend');
    var Stage = require('structurejs/display/Stage');

    /**
     * TODO: YUIDoc_comment
     *
     * @class App
     * @extends Stage
     * @constructor
     **/
    var App = (function () {

        var _super = Extend(App, Stage);

        function App() {
            _super.call(this);
        }

        /**
         * @overridden DOMElement.create
         */
        App.prototype.create = function () {
            _super.prototype.create.call(this);

            // Create and add your child objects to this parent class.

            console.log("create", this.$element);
        };

        /**
         * @overridden DOMElement.layout
         */
        App.prototype.layout = function () {
            // Layout or update the child objects in this parent class.

            console.log("layout");

            return this;
        };

        /**
         * @overridden DOMElement.enable
         */
        App.prototype.enable = function () {
            if (this.isEnabled === true) return this;

            // Enable the child objects and add any event listeners.

            console.log("enable");

            return _super.prototype.enable.call(this);
        };

        /**
         * @overridden DOMElement.disable
         */
        App.prototype.disable = function () {
            if (this.isEnabled === false) return this;

            // Disable the child objects and remove any event listeners.

            return _super.prototype.disable.call(this);
        };

        /**
         * @overridden DOMElement.destroy
         */
        App.prototype.destroy = function () {
            _super.prototype.destroy.call(this);

            // Destroy the child objects and references in this parent class to prevent memory leaks.
        };

        return App;
    })();

    module.exports = App;

});