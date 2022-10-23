import { SportsDriveStartegy } from "./DriverStrategy/SportsDriveStrategy";
import {Vechile} from "./Vechile";
class SportsVechile extends Vechile{
    constructor(){
        super(new SportsDriveStartegy());
    }
}
let obj = new SportsVechile();
console.log(obj.drive());