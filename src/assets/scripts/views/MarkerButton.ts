import Sprite = require('../../vendor/structurejs/ts/display/Sprite');
import Bitmap = require('../../vendor/structurejs/ts/display/Bitmap');
import BulkLoader = require('../utils/BulkLoader');
import ImageLoader = require('../utils/ImageLoader');

/**
 * TODO: YUIDoc_comment
 *
 * @class MarkerButton
 * @extends Sprite
 * @module namespace
 * @constructor
 **/
class MarkerButton extends Sprite {

    constructor() {
        super();
    }

    /**
     * @overridden Sprite.create
     */
    public create():void {
        super.create();

        var item:Bitmap = new Bitmap(BulkLoader.getImage('paint_0011_marker-outline.png'));
        item.scaleX = -1;
        this.addChild(item);

        var over:Bitmap = new Bitmap(BulkLoader.getImage('paint_0003_marker-over.png'));
        over.x = item.width + 10;
        over.y = (item.height / 2) - (over.height / 2);
        this.addChild(over);

        var up:Bitmap = new Bitmap(BulkLoader.getImage('paint_0004_marker-out.png'));
        up.x = item.width + 10;
        up.y = (item.height / 2) - (up.height / 2);
        this.addChild(up);
    }

    /**
     * @overridden Sprite.enable
     */
    public enable():void {
        if (this.isEnabled === true) { return; }

        // Enable the child objects and add any event listeners.

        super.enable();
    }

    /**
     * @overridden Sprite.disable
     */
    public disable():void {
        if (this.isEnabled === false) { return; }

        // Disable the child objects and remove any event listeners.

        super.disable();
    }

    /**
     * @overridden Sprite.destroy
     */
    public destroy():void {
        //  Destroy the child objects and references in this parent class to prevent memory leaks.

        super.destroy();
    }

}

export = MarkerButton;
