import Stage = require('../vendor/structurejs/ts/display/Stage');
import NavigationView = require('./view/NavigationView');
import LoginView = require('./view/LoginView');

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
    private _navigationView = null;

    /**
     * TODO: YUIDoc_comment
     *
     * @property _loginView
     * @type {LoginView}
     * @private
     */
    private _loginView:LoginView = null;

    constructor() {
        super();
    }

    /**
     * @overridden Stage.create
     */
    public create():void {
        super.create();

        // Create or setup objects in this parent class.

        this._navigationView = new NavigationView(this.$element.find('.js-navigationView'));
        this.addChild(this._navigationView);

        this._loginView = new LoginView();
        this.addChild(this._loginView);
    }

    /**
     * @overridden Stage.enable
     */
    public enable():void {
        if (this.isEnabled === true) { return; }

        // Enable the child objects and/or add any event listeners.

        super.enable();
    }

    /**
     * @overridden Stage.disable
     */
    public disable():void {
        if (this.isEnabled === false) { return; }

        // Disable the child objects and/or remove any event listeners.

        super.disable();
    }

    /**
     * @overridden Stage.layout
     */
    public layout():void {
        // Layout or update the objects in this parent class.
    }

    /**
     * @overridden Stage.destroy
     */
    public destroy():void {
        // Call destroy on any child objects.
        // This super method will also null out your properties for garbage collection.

        super.destroy();
    }

}

export = TestApp;