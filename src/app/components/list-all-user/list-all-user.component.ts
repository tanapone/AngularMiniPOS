import { Component, OnInit } from '@angular/core';
import { ListAllUserControllerService} from 'src/app/shared_service/list-all-user-controller.service'
import { User } from 'src/app/entity/user'

@Component({
  selector: 'app-list-all-user',
  templateUrl: './list-all-user.component.html',
  styleUrls: ['./list-all-user.component.css']
})
export class ListAllUserComponent implements OnInit {
 private users = new Array<User>();
  constructor(private listAllUserController:ListAllUserControllerService) { }
 
  getAllUsers(){
    this.listAllUserController.getAllUsers().then((res:User[])=>{
      this.users = res
    })
    console.log(this.users)
  }
  ngOnInit() {
    this.getAllUsers()
  }

}
