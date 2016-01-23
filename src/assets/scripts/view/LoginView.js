import DOMElement from 'structurejs/display/DOMElement';

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
    TITLE_TEXT = 'StructureJS Boilerplate (Babel)';

    /**
     * TODO: YUIDoc_comment
     *
     * @property _$loginBtn
     * @type {jQuery}
     * @private
     */
    _$loginBtn = null;

    constructor() {
        super();
    }

    /**
     * @overridden DOMElement.create
     */
    create() {
        super.create('templates/precompile/login/LoginTemplate', {title: this.TITLE_TEXT});

        // Create or setup objects in this parent class.

        this._$loginBtn = this.$element.find('.js-loginView-loginBtn');
    }

    /**
     * @overridden DOMElement.enable
     */
    enable() {
        if (this.isEnabled === true) { return; }

        // Enable the child objects and/or add any event listeners.

        this._$loginBtn.addEventListener('click', this._onClick, this);

        super.enable();
    }

    /**
     * @overridden DOMElement.disable
     */
    disable() {
        if (this.isEnabled === false) { return; }

        // Disable the child objects and/or remove any event listeners.

        this._$loginBtn.removeEventListener('click', this._onClick, this);

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

    //////////////////////////////////////////////////////////////////////////////////
    // EVENT HANDLERS
    //////////////////////////////////////////////////////////////////////////////////

    /**
     * TODO: YUIDoc_comment
     *
     * @method _onClick
     * @param JQueryEventObject
     * @private
     */
    _onClick(event) {
        event.preventDefault();

        alert('Sign In Button Clicked')
    }

}

export default LoginView;
