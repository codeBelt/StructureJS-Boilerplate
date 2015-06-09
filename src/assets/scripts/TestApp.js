import Stage from 'structurejs/display/Stage';
import {NavigationView} from './view/NavigationView';
import {LoginView} from './view/LoginView';

/**
 * TODO: YUIDoc_comment
 *
 * @class TestApp
 * @extends Stage
 * @constructor
 **/
class TestApp extends Stage {

    constructor() {
        super();

        /**
         * TODO: YUIDoc_comment
         *
         * @property _navigationView
         * @type {NavigationView}
         * @private
         */
        this._navigationView = null;

        /**
         * TODO: YUIDoc_comment
         *
         * @property _loginView
         * @type {LoginView}
         * @private
         */
        this._loginView = null;
    }


    /**
     * @overridden DOMElement.create
     */
    create() {
        super.create();

        // Create or setup objects in this parent class.

        this._navigationView = new NavigationView(this.$element.find('.js-navigationView'));
        this.addChild(this._navigationView);

        this._loginView = new LoginView();
        this.addChild(this._loginView);
    }
    
    /**
     * @overridden DOMElement.enable
     */
    enable() {
        if (this.isEnabled === true) { return this; }

        // Enable the child objects and/or add any event listeners.

        return super.enable();
    }

    /**
     * @overridden DOMElement.disable
     */
    disable() {
        if (this.isEnabled === false) { return this; }

        // Disable the child objects and/or remove any event listeners.

        return super.disable();
    }

    /**
     * @overridden DOMElement.layout
     */
    layout() {
        // Layout or update the objects in this parent class.

        return this;
    }

    /**
     * @overridden DOMElement.destroy
     */
    destroy() {
        // Call destroy on any child objects.
        // This super method will also null out your properties for garbage collection.

        super.destroy();
    }

}

export { TestApp };
