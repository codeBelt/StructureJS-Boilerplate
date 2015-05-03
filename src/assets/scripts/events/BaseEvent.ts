module namespace {

    export class BaseEvent {

        public static COMPLETE:string = 'BaseEvent.complete';

        public type:string = null;
        public target:any = null;
        public currentTarget:any = null;
        public data:any = null;

        constructor(type:string, data:any = null) {
            this.type = type;
            this.data = data;
        }

    }
}