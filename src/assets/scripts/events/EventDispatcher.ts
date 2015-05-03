///<reference path='BaseEvent.ts'/>

module namespace {

    /**
     * @class EventDispatcher
     * @module StructureJS
     * @submodule event
     * @requires BaseEvent
     * @constructor
     * @author Robert S. (www.codeBelt.com)
     */
    export class EventDispatcher {

        private _listeners:Array<any> = [];
        public parent:any = null;

        constructor() {
        }

        public addEventListener(type:string, callback:Function, scope:any, priority:number = 0):EventDispatcher {
            // Get the list of event listener(s) by the associated type value that is passed in.
            var list = this._listeners[type];
            if (list == null) {
                // If a list of event listener(s) do not exist for the type value passed in then create a new empty array.
                this._listeners[type] = list = [];
            }
            var index:number = 0;
            var listener;
            var i:number = list.length;
            while (--i > -1) {
                listener = list[i];
                if (listener.callback === callback && listener.scope === scope) {
                    // If same callback and scope is found then remove it. Then add the current one below.
                    list.splice(i, 1);
                }
                else if (index === 0 && listener.priority < priority) {
                    index = i + 1;
                }
            }
            // Add the event listener to the list array at the index value.
            list.splice(index, 0, {callback: callback, scope: scope, priority: priority});

            return this;
        }

        public removeEventListener(type:string, callback:Function, scope:any):EventDispatcher {
            // Get the list of event listener(s) by the associated type value that is passed in.
            var list = this._listeners[type];
            if (list) {
                var i = list.length;
                while (--i > -1) {
                    // If the callback and the scope are the same then remove the event listener.
                    if (list[i].callback === callback && list[i].scope === scope) {
                        list.splice(i, 1);
                        break;
                    }
                }
            }

            return this;
        }

        public dispatchEvent(type:any, data:any = null):EventDispatcher {
            var event = type;

            if (typeof event === 'string') {
                event = new BaseEvent(type, data);
            }

            // If target is null then set it to the object that dispatched the event.
            if (event.target == null) {
                event.target = this;
                event.currentTarget = this;
            }

            // Get the list of event listener(s) by the associated type value.
            var list = this._listeners[event.type];
            if (list) {
                var i:number = list.length;
                var listener:any;
                while (--i > -1) {
                    listener = list[i];
                    listener.callback.call(listener.scope, event);
                }
            }

            //Dispatches up the chain of classes that have a parent.
            if (this.parent) {
                // Assign the current object that is currently processing the event (i.e. bubbling at) in the display list hierarchy.
                event.currentTarget = this;

                // Pass the event to the parent (event bubbling).
                this.parent.dispatchEvent(event);
            }

            return this;
        }

    }
}