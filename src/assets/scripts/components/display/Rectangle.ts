///<reference path='../../../vendor/structurejs/ts/display/DisplayObject.ts'/>

module namespace {

    import DisplayObject = StructureJS.DisplayObject;

    export class Rectangle extends DisplayObject {

        public color:string;

        constructor(x:number, y:number, width:number, height:number, color:string) {
            super();

            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.height = height;
            this.color = color;
        }

        public create():void {
            super.create();
        }

        public layout():void {
            this.ctx.translate(this.parent.x, this.parent.y);
            this.ctx.translate(this.x, this.y);
            this.ctx.beginPath();
            this.ctx.rect(0, 0, this.width, this.height);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = '#000000';
            this.ctx.stroke();
        }

    }
}