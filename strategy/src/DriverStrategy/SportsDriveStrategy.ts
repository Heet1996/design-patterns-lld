import {IDriveStrategy} from './DriveStrategy.interface';
export class SportsDriveStartegy implements IDriveStrategy{
    drive(){
        console.log("Sports driving");
    }
}