import CanvasElement = require('../../vendor/structurejs/ts/display/CanvasElement');
import Sprite = require('../../vendor/structurejs/ts/display/Sprite');
import Bitmap = require('../../vendor/structurejs/ts/display/Bitmap');
import TextField = require('../../vendor/structurejs/ts/display/TextField');
import DisplayObject = require('../../vendor/structurejs/ts/display/DisplayObject');
import BulkLoader = require('../utils/BulkLoader');
import CrayonButton = require('../views/CrayonButton');
import MarkerButton = require('../views/MarkerButton');
import EraserButton = require('../views/EraserButton');
import RulerView = require('../views/RulerView');
import Rectangle = require('../components/display/Rectangle');


/**
 * TODO: YUIDoc_comment
 *
 * @class DrawingBoard
 * @extends CanvasElement
 * @module namespace
 * @constructor
 **/
class DrawingBoard extends CanvasElement {

    public dragging = false;
    private _offset:any;
    private _currentItem:DisplayObject;

    constructor($element:JQuery) {
        super($element);
    }

    /**
     * @overridden CanvasElement.create
     */
    public create():void {
        super.create();

        var colorsLabel = new TextField();
        colorsLabel.text = 'Colors';
        colorsLabel.font = 'Shadows Into Light';
        //var colorsLabel:Bitmap = new Bitmap(BulkLoader.getImage('paint_0008_colors.png'));
        this.addChild(colorsLabel);

        var toolsLabel:Bitmap = new Bitmap(BulkLoader.getImage('paint_0007_tools.png'));
        toolsLabel.x = this.width - toolsLabel.width;
        toolsLabel.mouseEnabled = true;
        toolsLabel.useHandCursor = true;
        this.addChild(toolsLabel);

        var board:Bitmap = new Bitmap(BulkLoader.getImage('paint_0000_drawing-area.png'));
        board.x = (this.width / 2) - (board.width / 2);
        board.y = (this.height / 2) - (board.height / 2);
        this.addChild(board);

        var crayonButton:CrayonButton = new CrayonButton();
        crayonButton.x = 346;
        crayonButton.y = 24;
        this.addChildAt(crayonButton, 0);

        var markerButton:MarkerButton = new MarkerButton();
        markerButton.x = 343;
        markerButton.y = 61;
        this.addChildAt(markerButton, 0);

        var eraserButton:EraserButton = new EraserButton();
        eraserButton.x = 358;
        eraserButton.y = 100;
        this.addChildAt(eraserButton, 0);

        var rulerView:RulerView = new RulerView();
        rulerView.x = board.x + board.width - 20;
        rulerView.y = board.y + board.height - 60;
        this.addChildAt(rulerView, 0);


        /*var crayonOver:Bitmap = new Bitmap(BulkLoader.getImage('paint_0001_crayon-over.png'));
         var crayonUp:Bitmap = new Bitmap(BulkLoader.getImage('paint_0002_crayon-out.png'));

         var simpleButton:SimpleButton = new SimpleButton(crayonUp, crayonOver);
         simpleButton.x = 50;
         simpleButton.y = 50;
         this.addChild(simpleButton);*/

        var duck:Bitmap = new Bitmap(BulkLoader.getImage('watermelon-duck-outline.png'));
        duck.x = (board.width / 2) - (duck.width / 2) + board.x;
        duck.y = (board.height / 2) - (duck.height / 2) + board.y;
        this.addChild(duck);

        this.update();
    }

    /**
     * @overridden CanvasElement.enable
     */
    public enable():void {
        if (this.isEnabled === true) { return; }

        this.addEventListener('mousedown', this.mouseDownListener, this);
        //this.addEventListener('mouseup', this.onStageClick, this);

        super.enable();
    }

    /**
     * @overridden CanvasElement.disable
     */
    public disable():void {
        if (this.isEnabled === false) { return; }

        this.removeEventListener('mousedown', this.mouseDownListener, this);
        //this.removeEventListener('mouseup', this.onStageClick, this);

        super.disable();
    }

    private makeShapes():void {
        var i;
        var tempX;
        var tempY;
        var tempRad;
        var tempR;
        var tempG;
        var tempB;
        var tempColor;
        for (i=0; i < 10; i++) {
            tempRad = 10 + Math.floor(Math.random()*25);
            tempX = Math.random()*(this.canvas.width - tempRad);
            tempY = Math.random()*(this.canvas.height - tempRad);
            tempR = Math.floor(Math.random()*255);
            tempG = Math.floor(Math.random()*255);
            tempB = Math.floor(Math.random()*255);
            tempColor = 'rgb(' + tempR + ',' + tempG + ',' + tempB +')';
            var dd = new Rectangle(tempX, tempY, tempRad, tempRad, tempColor);
            dd.addEventListener('mousedown', this.mouseDownListener, this);
            this.addChild(dd);
        }
    }

    private mouseDownListener(event:JQueryEventObject):void {
        event.preventDefault();

        var mousePos = this.getMousePos(event);
        this._currentItem = this.getObjectUnderPoint(mousePos.x, mousePos.y);

        if (this._currentItem !== null) {
            this.dragging = true;

            this._offset = {
                x: this._currentItem.x - mousePos.x,
                y: this._currentItem.y - mousePos.y
            };

            this.addEventListener('mousemove', this.mouseMoveListener, this);
            this.removeEventListener('mousedown', this.mouseDownListener, this);
            this.addEventListener('mouseup', this.mouseUpListener, this);
        }

        this.update();
    }

    private mouseUpListener(event:JQueryEventObject):void {
        this.addEventListener('mousedown', this.mouseDownListener, this);
        this.removeEventListener('mouseup', this.mouseUpListener, this);
        if (this.dragging) {
            this.dragging = false;
            this.removeEventListener('mousemove', this.mouseMoveListener, this);
        }

        this.update();
    }

    private mouseMoveListener(event:JQueryEventObject):void {
        var mousePos = this.getMousePos(event);

        this._currentItem.x = mousePos.x + this._offset.x;
        this._currentItem.y = mousePos.y + this._offset.y;

        this.update();
    }

    //private onStageClick(event:MouseEvent):void {
    //    console.log("onStageClick", event);
    //}

}

export = DrawingBoard;
