import {IDriveStrategy} from './DriveStrategy.interface';
export class NormalDriveStartegy implements IDriveStrategy{
    drive(){
        console.log("Normal driving");
    }
}