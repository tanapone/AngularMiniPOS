import { Component, OnInit } from '@angular/core';
import { ListAllUserControllerService} from '../../shared_service/userControllers/list-all-user-controller.service'
import { User } from 'src/app/entity/user'
import { RemoveUserControllerService } from '../../shared_service/userControllers/remove-user-controller.service'

@Component({
  selector: 'app-list-all-user',
  templateUrl: './list-all-user.component.html',
  styleUrls: ['./list-all-user.component.css']
})
export class ListAllUserComponent implements OnInit {
 private users = new Array<User>();
  constructor(private listAllUserController:ListAllUserControllerService,private removeUserController:RemoveUserControllerService) { }
 
  errMsg:string=''

  getAllUsers(){
    this.listAllUserController.getAllUsers().then((res:User[])=>{
      this.users = res
    })
  }

  checkUserStatus(user:User):string{
    let result:string;
    if(user.isUserStatus()==true){
      result = 'เปิดการใช้งาน'
    }else{
      result = 'ปิดการใช้งาน'
    }
    return result;
  }

  removeUser(id:Number){
    this.removeUserController.removeUser(id).then((res:any)=>{
      if(res){
        let responseData = JSON.parse(res);
        if(responseData.message == 'User is in order please change user status.'){
          alert('ไม่สามารถลบผู้ใช้งานนี้ได้เนื่องจาก ผู้ใช้งานนี้ได้ทำการทำรายการขายแล้ว ให้กรุณาเปลี่ยนสถานะการใช้งานแทน เพื่อไม่ให้เกิดผลกระทบต่อยอดขาย')
        }
      }
      this.getAllUsers();
    })
  }

  ngOnInit() {
    this.getAllUsers()
  }

}
