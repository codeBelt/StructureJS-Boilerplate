interface IEventDispatcher {
    addEventListener(type:string, callback:Function, scope:any, priority?:number);
    removeEventListener(type:string, callback:Function, scope:any);
    dispatchEvent(type:any, data?:any);
}

export = IEventDispatcher;
