"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SportsDriveStrategy_1 = require("./DriverStrategy/SportsDriveStrategy");
const Vechile_1 = require("./Vechile");
class SportsVechile extends Vechile_1.Vechile {
    constructor() {
        super(new SportsDriveStrategy_1.SportsDriveStartegy());
    }
}
let obj = new SportsVechile();
console.log(obj.drive());
