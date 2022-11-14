import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

// We use @Injectable() in the service where we want to inject something
// it is recommended that we always add @Injectable()
// to all services
@Injectable()
export class UserService{

    constructor(private logger: LoggerService){}
    Users=[
        {name:"John",status:"Active"},
        {name:"Mark",status:"Inactive"},
        {name:"Steve",status:"Active"}
    ]
    addNewUser(name:string,status:string){
        this.Users.push({name,status});
        this.logger.logMessage(name,status);
    }
}