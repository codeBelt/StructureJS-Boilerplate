import IDataStore = require('../interfaces/IDataStore');
import EventDispatcher = require('../../vendor/structurejs/ts/event/EventDispatcher');
import LoaderEvent = require('../../vendor/structurejs/ts/event/LoaderEvent');

class ImageLoader extends EventDispatcher implements IDataStore {

    private _image:HTMLImageElement;

    public data:any;
    public src:string;
    public complete:boolean = false;

    constructor(path:string) {
        super();

        this.src = path;
        this.init();
    }

    private init():void {
        this._image = new Image();
        this._image.onload = (event:Event) => {
            this.onImageLoad();
        }
    }

    public load():void {
        this._image.src = this.src;
    }

    private onImageLoad():void {
        this.data = this._image;
        this.complete = true;
        this.dispatchEvent(LoaderEvent.COMPLETE);
    }
}

export = ImageLoader;
