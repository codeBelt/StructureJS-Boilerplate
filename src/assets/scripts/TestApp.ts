import Stage from '../vendor/structurejs/ts/display/Stage';
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
     * @overridden Stage.onEnabled
     */
    public onEnabled():void {
        // Enable the child objects and/or add any event listeners.
    }

    /**
     * @overridden Stage.onDisabled
     */
    public onDisabled():void {
        // Disable the child objects and/or remove any event listeners.
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
        this.disable();

        // Call destroy on any child objects.
        // This super method will also null out your properties for garbage collection.

        super.destroy();
    }

}

export default TestApp;
