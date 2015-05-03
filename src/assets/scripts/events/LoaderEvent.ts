///<reference path='BaseEvent.ts'/>

module namespace {

    export class LoaderEvent extends BaseEvent {

        public static COMPLETE:string = 'LoaderEvent.complete';
        public static LOAD_COMPLETE:string = 'LoaderEvent.loadComplete';

        constructor(type:string, target:any) {
            super(type, target);
        }

    }
}