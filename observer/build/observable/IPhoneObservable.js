"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPhoneObservable = void 0;
class IPhoneObservable {
    constructor() {
        this.listObj = [];
        this.listData = {};
    }
    add(obj) {
        this.listObj.push(obj);
    }
    remove(obj) {
        this.listObj.filter((currObj) => currObj !== obj);
    }
    notify() {
        this.listObj.forEach((currObj) => currObj.update());
    }
    setData(data) {
        let { id, count } = data;
        if (id in this.listData)
            this.listData[id].count += count;
        else {
            this.notify();
            this.listData[id] = data;
        }
        ;
    }
    getData(id) {
        return this.listData[id];
    }
}
exports.IPhoneObservable = IPhoneObservable;
