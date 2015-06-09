import DOMElement from 'structurejs/display/DOMElement';

/**
 * TODO: YUIDoc_comment
 *
 * @class NavigationView
 * @extends DOMElement
 * @constructor
 **/
class NavigationView extends DOMElement {

    constructor($element) {
        super($element);
    }

    /**
     * @overridden DOMElement.create
     */
    create() {
        super.create();

        // Create or setup objects in this parent class.
    }

    /**
     * @overridden DOMElement.enable
     */
    enable() {
        if (this.isEnabled === true) { return this; }

        // Enable the child objects and/or add any event listeners.

        return super.enable();
    }

    /**
     * @overridden DOMElement.disable
     */
    disable() {
        if (this.isEnabled === false) { return this; }

        // Disable the child objects and/or remove any event listeners.

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

}

export { NavigationView };