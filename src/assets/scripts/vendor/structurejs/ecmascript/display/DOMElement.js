export class DOMElement {

    constructor($element) {
        this.isEnabled = false;
    }

    create(template, data) {
    }

    enable() {
        this.isEnabled = true;

        return this;
    }

    disable() {
        this.isEnabled = false;

        return this;
    }

    layout() {

        return this;
    }

    addChild(child) {

    }

    destroy() {

    }
}
