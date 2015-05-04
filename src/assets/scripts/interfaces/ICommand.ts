import IEventDispatcher = require('./IEventDispatcher');

interface ICommand extends IEventDispatcher {
    execute():void;
}

export = ICommand;
