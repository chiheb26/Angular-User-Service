import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  //providers:[UserService]
})
export class AdduserComponent implements OnInit {

  constructor(private userService: UserService) { }
  username: string="";
  status:string ="Active";
  ngOnInit(): void {
  }
addUser(){
  this.userService.addNewUser(this.username,this.status);
  //console.log(this.userService.Users);
}
}
