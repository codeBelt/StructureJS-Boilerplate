import Stage = require('../vendor/structurejs/ts/display/Stage');
import LoaderEvent = require('../vendor/structurejs/ts/event/LoaderEvent');
import BulkLoader = require('./utils/BulkLoader');
import ImageLoader = require('./utils/ImageLoader');
import DrawingBoard = require('./views/DrawingBoard');

/**
 * TODO: YUIDoc_comment
 *
 * @class CommandPatternExample
 * @extends Stage
 * @module namespace
 * @constructor
 **/
class CommandPatternExample extends Stage {

    private static BASE_PATH:string = 'assets/media/images/';

    private _drawingBoard:DrawingBoard = null;

    constructor() {
        super();
    }

    /**
     * @overridden Stage.create
     */
    public create():void {
        super.create();

        this.loadAssets();
    }

    private loadAssets():void {
        BulkLoader.addEventListener(LoaderEvent.LOAD_COMPLETE, this.onAssetsLoadComplete, this);
        BulkLoader.addFile(new ImageLoader(CommandPatternExample.BASE_PATH + 'paint_0000_drawing-area.png'), 'paint_0000_drawing-area.png');
        BulkLoader.addFile(new ImageLoader(CommandPatternExample.BASE_PATH + 'paint_0001_crayon-over.png'), 'paint_0001_crayon-over.png');
        BulkLoader.addFile(new ImageLoader(CommandPatternExample.BASE_PATH + 'paint_0002_crayon-out.png'), 'paint_0002_crayon-out.png');
        BulkLoader.addFile(new ImageLoader(CommandPatternExample.BASE_PATH + 'paint_0003_marker-over.png'), 'paint_0003_marker-over.png');
        BulkLoader.addFile(new ImageLoader(CommandPatternExample.BASE_PATH + 'paint_0004_marker-out.png'), 'paint_0004_marker-out.png');
        BulkLoader.addFile(new ImageLoader(CommandPatternExample.BASE_PATH + 'paint_0005_eraser-over.png'), 'paint_0005_eraser-over.png');
        BulkLoader.addFile(new ImageLoader(CommandPatternExample.BASE_PATH + 'paint_0006_eraser-out.png'), 'paint_0006_eraser-out.png');
        BulkLoader.addFile(new ImageLoader(CommandPatternExample.BASE_PATH + 'paint_0007_tools.png'), 'paint_0007_tools.png');
        BulkLoader.addFile(new ImageLoader(CommandPatternExample.BASE_PATH + 'paint_0008_colors.png'), 'paint_0008_colors.png');
        BulkLoader.addFile(new ImageLoader(CommandPatternExample.BASE_PATH + 'paint_0009_ruler.png'), 'paint_0009_ruler.png');
        BulkLoader.addFile(new ImageLoader(CommandPatternExample.BASE_PATH + 'paint_0010_crayon-outline.png'), 'paint_0010_crayon-outline.png');
        BulkLoader.addFile(new ImageLoader(CommandPatternExample.BASE_PATH + 'paint_0011_marker-outline.png'), 'paint_0011_marker-outline.png');
        BulkLoader.addFile(new ImageLoader(CommandPatternExample.BASE_PATH + 'paint_0012_eraser-outline.png'), 'paint_0012_eraser-outline.png');
        BulkLoader.addFile(new ImageLoader(CommandPatternExample.BASE_PATH + 'watermelon-duck-outline.png'), 'watermelon-duck-outline.png');
        BulkLoader.load();
    }

    private onAssetsLoadComplete(event:LoaderEvent):void {
        this._drawingBoard = new DrawingBoard(this.$element.find('#canvasId'));
        this.addChild(this._drawingBoard);
    }

}

export = CommandPatternExample;
