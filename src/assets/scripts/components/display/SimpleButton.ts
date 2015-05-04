import Sprite = require('../../../vendor/structurejs/ts/display/Sprite');
import DisplayObject = require('../../../vendor/structurejs/ts/display/DisplayObject');

/**
 * TODO: YUIDoc_comment
 *
 * @class SimpleButton
 * @extends Sprite
 * @module namespace
 * @constructor
 **/
class SimpleButton extends Sprite {

    public upState:DisplayObject = null;
    public overState:DisplayObject = null;
    public downState:DisplayObject = null;
    public hitTestState:DisplayObject = null;

    constructor(upState:DisplayObject = null, overState:DisplayObject = null, downState:DisplayObject = null, hitTestState:DisplayObject = null) {
        super();

        this.useHandCursor = true;
        this.mouseEnabled = true;

        this.upState = upState;
        this.upState.useHandCursor = true;
        this.upState.mouseEnabled = true;
        this.overState = overState;
        this.overState.useHandCursor = true;
        this.overState.mouseEnabled = true;
        this.downState = downState;
        this.hitTestState = hitTestState;
    }

    public create():void {
        super.create();

        this.addChild(this.upState);
    }

    /**
     * @overridden CanvasElement.enable
     */
    public enable():void {
        if (this.isEnabled === true) { return; }

        this.addEventListener('mousemove', this.onMouseOver, this);
        this.addEventListener('mouseout', this.onMouseOut, this);

        super.enable();
    }

    /**
     * @overridden CanvasElement.disable
     */
    public disable():void {
        if (this.isEnabled === false) { return; }

        this.removeEventListener('mousemove', this.onMouseOver, this);
        this.removeEventListener('mouseout', this.onMouseOut, this);

        super.disable();
    }

    public layout():void {
        this.width = this.upState.width;
        this.height = this.upState.height;

        for (var i:number = 0; i < this.numChildren; i++) {
            this.children[i].update();
        }
    }

    protected onMouseOver(event):void {
        console.log("onMouseOver");
        this.removeChild(this.upState);
        this.addChild(this.overState);

        this.stage.update();
    }

    protected onMouseOut(event):void {
        console.log("onMouseOut");
        this.removeChild(this.overState);
        this.addChild(this.upState);

        this.stage.update();
    }

}

export = SimpleButton;
