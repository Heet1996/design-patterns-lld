import { IObserve } from "../observer/IObserve.interface";
import { IObservable } from "./IObservable.interface";

type IPhone = {
    name: string,
    id: string,
    count: number
}
export class IPhoneObservable implements IObservable<IPhone>{
    listObj: Array<IObserve> = [];
    listData: {[id: string]: IPhone} = {};
    add(obj: IObserve): void {
        this.listObj.push(obj);
    }
    remove(obj: IObserve): void {
        this.listObj.filter((currObj)=>currObj!==obj);
    }
    notify(): void {
        this.listObj.forEach((currObj)=>currObj.update());
    }
    setData(data: IPhone): void {
        let {id, count} = data;
        if(id in this.listData)
        this.listData[id].count += count;
        else {
            this.notify();
            this.listData[id] = data
        };
    }
    getData(id: string): IPhone {
        return this.listData[id];
    }

}