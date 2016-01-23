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

export default DropdownView;
