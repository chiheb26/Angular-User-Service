
export class UserService{

    Users=[
        {name:"John",status:"Active"},
        {name:"Mark",status:"Inactive"},
        {name:"Steve",status:"Active"}
    ]
    addNewUser(name:string,status:string){
        this.Users.push({name,status});
    }
}