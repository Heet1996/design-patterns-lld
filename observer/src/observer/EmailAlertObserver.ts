import { IPhoneObservable } from "../observable/IPhoneObservable";
import { IObserve } from "./IObserve.interface";

export class EmailAlertObserver implements IObserve{

    constructor(private emailId: string, private observable: IPhoneObservable){
        this.observable.add(this);
    }
    update(): void {
        console.log("Email Notification", this.emailId);
    }
}