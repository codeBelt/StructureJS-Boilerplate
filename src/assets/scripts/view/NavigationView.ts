import DOMElement from '../../vendor/structurejs/ts/display/DOMElement';

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
    protected _dropdownView:DropdownView = null;

    constructor($element:JQuery) {
        super($element);
    }

    /**
     * @overridden DOMElement.create
     */
    public create():void {
        super.create();

        let container:DOMElement = this.getChild('.js-navigationView-container');

        this._dropdownView = new DropdownView();
        container.addChild(this._dropdownView);
    }

    /**
     * @overridden DOMElement.enable
     */
    public enable():void {
        if (this.isEnabled === true) { return; }

        // Enable the child objects and/or add any event listeners.

        super.enable();
    }

    /**
     * @overridden DOMElement.disable
     */
    public disable():void {
        if (this.isEnabled === false) { return; }

        // Disable the child objects and/or remove any event listeners.

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
        this.disable();

        // Call destroy on any child objects.
        // This super method will also null out your properties for garbage collection.

        super.destroy();
    }

}

export default NavigationView;
