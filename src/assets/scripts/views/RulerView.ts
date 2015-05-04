import Sprite = require('../../vendor/structurejs/ts/display/Sprite');
import Bitmap = require('../../vendor/structurejs/ts/display/Bitmap');
import BulkLoader = require('../utils/BulkLoader');
import ImageLoader = require('../utils/ImageLoader');
import Rectangle = require('../components/display/Rectangle');

/**
 * TODO: YUIDoc_comment
 *
 * @class RulerView
 * @extends Sprite
 * @module namespace
 * @constructor
 **/
class RulerView extends Sprite {

    constructor() {
        super();

        this.mouseChildren = true;
    }

    /**
     * @overridden Sprite.create
     */
    public create():void {
        super.create();

        var ruler:Bitmap = new Bitmap(BulkLoader.getImage('paint_0009_ruler.png'));
        this.addChild(ruler);

        var hitZone:Rectangle = new Rectangle(21, 5, 26, 50, '#FF0000');
        hitZone.name = 'brushSize_0';
        hitZone.alpha = 0;
        hitZone.useHandCursor = true;
        hitZone.mouseEnabled = true;
        this.addChild(hitZone);

        hitZone = new Rectangle(hitZone.x + hitZone.width, 5, 26, 50, '#FF0000');
        hitZone.name = 'brushSize_1';
        hitZone.alpha = 0;
        hitZone.useHandCursor = true;
        hitZone.mouseEnabled = true;
        this.addChild(hitZone);

        hitZone = new Rectangle(hitZone.x + hitZone.width, 5, 26, 50, '#FF0000');
        hitZone.name = 'brushSize_2';
        hitZone.alpha = 0;
        hitZone.useHandCursor = true;
        hitZone.mouseEnabled = true;
        this.addChild(hitZone);

        hitZone = new Rectangle(hitZone.x + hitZone.width, 5, 26, 50, '#FF0000');
        hitZone.name = 'brushSize_3';
        hitZone.alpha = 0;
        hitZone.useHandCursor = true;
        hitZone.mouseEnabled = true;
        this.addChild(hitZone);
    }

    /**
     * @overridden Sprite.enable
     */
    public enable():void {
        if (this.isEnabled === true) { return; }

        this.addEventListener('mouseup', this.onMouseUp, this);

        super.enable();
    }

    /**
     * @overridden Sprite.disable
     */
    public disable():void {
        if (this.isEnabled === false) { return; }

        this.removeEventListener('mouseup', this.onMouseUp, this);

        super.disable();
    }

    private onMouseUp(event):void {
        console.log("onMouseUp", event.target.name);
    }

}

export = RulerView;
