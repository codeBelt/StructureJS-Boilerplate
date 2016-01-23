import Stage from 'structurejs/display/Stage';
import NavigationView from './view/NavigationView';
import LoginView from './view/LoginView';

/**
 * TODO: YUIDoc_comment
 *
 * @class TestApp
 * @extends Stage
 * @constructor
 **/
class TestApp extends Stage {

    /**
     * TODO: YUIDoc_comment
     *
     * @property _navigationView
     * @type {NavigationView}
     * @private
     */
    _navigationView = null;

    /**
     * TODO: YUIDoc_comment
     *
     * @property _loginView
     * @type {LoginView}
     * @private
     */
    _loginView = null;

    constructor() {
        super();
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
        if (this.isEnabled === true) { return; }

        // Enable the child objects and/or add any event listeners.

        super.enable();
    }

    /**
     * @overridden DOMElement.disable
     */
    disable() {
        if (this.isEnabled === false) { return; }

        // Disable the child objects and/or remove any event listeners.

        super.disable();
    }

    /**
     * @overridden DOMElement.layout
     */
    layout() {
        // Layout or update the objects in this parent class.
    }

    /**
     * @overridden DOMElement.destroy
     */
    destroy() {
        this.disable();

        // Call destroy on any child objects.
        // This super method will also null out your properties for garbage collection.

        super.destroy();
    }

}

export default TestApp;
