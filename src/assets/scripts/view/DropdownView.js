import DOMElement from 'structurejs/display/DOMElement';

/**
 * TODO: YUIDoc_comment
 *
 * @class DropdownView
 * @extends DOMElement
 * @constructor
 **/
class DropdownView extends DOMElement {

    constructor() {
        super();
    }

    /**
     * @overridden DOMElement.create
     */
    create():void {
        super.create('#dropdownView-inlineTemplate');

        // Create or setup objects in this parent class.
    }

    /**
     * @overridden DOMElement.onEnabled
     */
    onEnabled():void {
        // Enable the child objects and/or add any event listeners.
    }

    /**
     * @overridden DOMElement.onDisabled
     */
    onDisabled():void {
        // Disable the child objects and/or remove any event listeners.
    }

    /**
     * @overridden DOMElement.layout
     */
    layout():void {
        // Layout or update the objects in this parent class.
    }

    /**
     * @overridden DOMElement.destroy
     */
    destroy():void {
        this.disable();

        // Call destroy on any child objects.
        // This super method will also null out your properties for garbage collection.

        super.destroy();
    }

}

export default DropdownView;
