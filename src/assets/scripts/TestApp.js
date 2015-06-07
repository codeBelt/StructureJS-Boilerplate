import DOMElement from 'vendor/structurejs/ecmascript/display/DOMElement';

class TestApp extends DOMElement {

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

    create() {
        super.create();

        // Create or setup objects in this parent class.

        this._navigationView = new NavigationView(this.$element.find('.js-navigationView'));
        this.addChild(this._navigationView);

        this._loginView = new LoginView();
        this.addChild(this._loginView);
    }

    enable() {
        if (this.isEnabled === false) { return this; }

        // Enable the child objects and/or add any event listeners.

        return super.enable();
    }

    disable() {
        if (this.isEnabled === false) { return this; }

        // Disable the child objects and/or remove any event listeners.

        return super.disable();
    }

    layout() {
        // Layout or update the objects in this parent class.

        return this;
    }

    destroy() {
        // Call destroy on any child objects.
        // This super method will also null out your properties for garbage collection.

        super.destroy();
    }

}
