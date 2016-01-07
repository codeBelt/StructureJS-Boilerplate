import DOMElement from '../../vendor/structurejs/ts/display/DOMElement';

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
    public create():void {
        super.create('#dropdownView-inlineTemplate');

        // Create or setup objects in this parent class.
    }

    /**
     * @overridden DOMElement.onEnabled
     */
    public onEnabled():void {
        // Enable the child objects and/or add any event listeners.
    }

    /**
     * @overridden DOMElement.onDisabled
     */
    public onDisabled():void {
        // Disable the child objects and/or remove any event listeners.
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

export default DropdownView;
