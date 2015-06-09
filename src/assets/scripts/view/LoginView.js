import DOMElement from 'structurejs/display/DOMElement';

/**
 * TODO: YUIDoc_comment
 *
 * @class LoginView
 * @extends DOMElement
 * @constructor
 **/
class LoginView extends DOMElement {

    constructor($element) {
        super($element);

        /**
         * TODO: YUIDoc_comment
         *
         * @property TITLE_TEXT
         * @type {string}
         * @constant
         */
        this.TITLE_TEXT = 'StructureJS Boilerplate (Babel)';

        /**
         * TODO: YUIDoc_comment
         *
         * @property _$loginBtn
         * @type {jQuery}
         * @private
         */
        this._$loginBtn = null;
    }

    /**
     * @overridden DOMElement.create
     */
    create() {
        super.create('templates/login/LoginTemplate', {title: this.TITLE_TEXT});

        // Create or setup objects in this parent class.

        this._$loginBtn = this.$element.find('.js-loginBtn');
    }

    /**
     * @overridden DOMElement.enable
     */
    enable() {
        if (this.isEnabled === true) { return this; }

        // Enable the child objects and/or add any event listeners.

        this._$loginBtn.addEventListener('click', this._onClick, this);

        return super.enable();
    }

    /**
     * @overridden DOMElement.disable
     */
    disable() {
        if (this.isEnabled === false) { return this; }

        // Disable the child objects and/or remove any event listeners.

        this._$loginBtn.removeEventListener('click', this._onClick, this);

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

    /**
     * TODO: YUIDoc_comment
     *
     * @method _onClick
     * @private
     */
    _onClick(event) {
        event.preventDefault();

        alert('Sign In Button Clicked')
    }

}

export { LoginView };
