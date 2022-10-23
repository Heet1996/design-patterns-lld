import {IObserve} from '../observer/IObserve.interface';
export interface IObservable<T>{
    listObj: Array<IObserve>;
    add(obj : IObserve): void;
    remove(obj : IObserve):void;
    notify():void;
    setData(data: T): void;
    getData(id: string): T;
}
