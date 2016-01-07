import DOMElement from 'structurejs/display/DOMElement';

import DropdownView from './DropdownView';

/**
 * TODO: YUIDoc_comment
 *
 * @class NavigationView
 * @extends DOMElement
 * @constructor
 **/
class NavigationView extends DOMElement {

    /**
     * TODO: YUIDoc_comment
     *
     * @property _dropdownView
     * @type {DropdownView}
     * @protected
     */
    _dropdownView = null;

    constructor($element) {
        super($element);
    }

    /**
     * @overridden DOMElement.create
     */
    create() {
        super.create();

        let container:DOMElement = this.getChild('.js-navigationView-container');

        this._dropdownView = new DropdownView();
        container.addChild(this._dropdownView);
    }

    /**
     * @overridden DOMElement.onEnabled
     */
    onEnabled() {
        // Enable the child objects and/or add any event listeners.
    }

    /**
     * @overridden DOMElement.onDisabled
     */
    onDisabled() {
        // Disable the child objects and/or remove any event listeners.
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

export default NavigationView;
