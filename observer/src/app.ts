import { IPhoneObservable } from "./observable/IPhoneObservable";
import { EmailAlertObserver } from "./observer/EmailAlertObserver";

const iphoneObserve = new IPhoneObservable();
const emailObj = new EmailAlertObserver("heet1", iphoneObserve);

iphoneObserve.setData({
    id:"12",
    name:"IPhone X",
    count:10
});