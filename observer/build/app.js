"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IPhoneObservable_1 = require("./observable/IPhoneObservable");
const EmailAlertObserver_1 = require("./observer/EmailAlertObserver");
const iphoneObserve = new IPhoneObservable_1.IPhoneObservable();
const emailObj = new EmailAlertObserver_1.EmailAlertObserver("heet1", iphoneObserve);
iphoneObserve.setData({
    id: "12",
    name: "IPhone X",
    count: 10
});
