interface ICommand extends IEventDispatcher {
    execute():void;
}