import IEventDispatcher = require('./IEventDispatcher');

interface IDataStore extends IEventDispatcher {
    data:any;
    src:string;
    complete:boolean;
    load():void;
}

export = IDataStore;
