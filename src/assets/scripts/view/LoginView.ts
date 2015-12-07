import DOMElement = require('../../vendor/structurejs/ts/display/DOMElement');

/**
 * TODO: YUIDoc_comment
 *
 * @class LoginView
 * @extends DOMElement
 * @constructor
 **/
class LoginView extends DOMElement {

    /**
     * TODO: YUIDoc_comment
     *
     * @property TITLE_TEXT
     * @type {string}
     * @constant
     */
    private TITLE_TEXT:string = 'StructureJS Boilerplate (TypeScript)';

    /**
     * TODO: YUIDoc_comment
     *
     * @property _$loginBtn
     * @type {JQuery}
     * @private
     */
    private _$loginBtn:JQuery = null;

    constructor() {
        super();
    }

    /**
     * @overridden DOMElement.create
     */
    public create():void {
        super.create('templates/precompile/login/LoginTemplate', {title: this.TITLE_TEXT});

        // Create or setup objects in this parent class.

        this._$loginBtn = this.$element.find('.js-loginBtn');
    }

    /**
     * @overridden DOMElement.enable
     */
    public enable():void {
        if (this.isEnabled === true) { return; }

        // Enable the child objects and/or add any event listeners.

        this._$loginBtn.addEventListener('click', this._onClick, this);

        super.enable();
    }

    /**
     * @overridden DOMElement.disable
     */
    public disable():void {
        if (this.isEnabled === false) { return; }

        // Disable the child objects and/or remove any event listeners.

        this._$loginBtn.removeEventListener('click', this._onClick, this);

        super.disable();
    }

    /**
     * @overridden DOMElement.layout
     */
    public layout():void {
        // Layout or update the objects in this parent class.
    }

    /**
     * @overridden DOMElement.destroy
     */
    public destroy():void {
        // Call destroy on any child objects.
        // This super method will also null out your properties for garbage collection.

        super.destroy();
    }

    /**
     * TODO: YUIDoc_comment
     *
     * @method _onClick
     * @param JQueryEventObject
     * @private
     */
    private _onClick(event:JQueryEventObject):void {
        event.preventDefault();

        alert('Sign In Button Clicked')
    }
}

export = LoginView;
