import {IDriveStrategy} from './DriverStrategy/DriveStrategy.interface';
export class Vechile{
    constructor(private obj: IDriveStrategy){};
    drive(){
        this.obj.drive();
    }
}