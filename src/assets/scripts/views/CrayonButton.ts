///<reference path='../utils/BulkLoader.ts'/>
///<reference path='../utils/ImageLoader.ts'/>
///<reference path='../../vendor/structurejs/ts/display/Sprite.ts'/>
///<reference path='../../vendor/structurejs/ts/display/Bitmap.ts'/>

module namespace {

    import Sprite = StructureJS.Sprite;
    import Bitmap = StructureJS.Bitmap;

    /**
     * TODO: YUIDoc_comment
     *
     * @class CrayonButton
     * @extends Sprite
     * @module namespace
     * @constructor
     **/
    export class CrayonButton extends Sprite {

        constructor() {
            super();
        }

        /**
         * @overridden Sprite.create
         */
        public create():void {
            super.create();

            var item:Bitmap = new Bitmap(BulkLoader.getImage('paint_0010_crayon-outline.png'));
            item.scaleX = -1;
            this.addChild(item);

            var over:Bitmap = new Bitmap(BulkLoader.getImage('paint_0001_crayon-over.png'));
            over.x = item.width + 10;
            over.y = (item.height / 2) - (over.height / 2);
            this.addChild(over);

            var up:Bitmap = new Bitmap(BulkLoader.getImage('paint_0002_crayon-out.png'));
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
}