"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAlertObserver = void 0;
class EmailAlertObserver {
    constructor(emailId, observable) {
        this.emailId = emailId;
        this.observable = observable;
        this.observable.add(this);
    }
    update() {
        console.log("Email Notification", this.emailId);
    }
}
exports.EmailAlertObserver = EmailAlertObserver;
