import { Injectable } from '@angular/core';
import { WsTaskService } from '../ws-task.service';
import { User } from 'src/app/entity/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResetUserPasswordControllerService {

  constructor(private router:Router,private wsTask:WsTaskService) { }

  getUser(authKey:String):Promise<User|void>{
    return this.wsTask.doGet('/user'+'?authKey='+authKey).then((data:any)=>{
      let responseData = data
      let user = new User();
        user.setUsername(responseData.username)
        user.setPassword(responseData.password)
        user.setFirstName(responseData.firstName)
        user.setLastName(responseData.lastName)
        user.setPhoneNumber(responseData.phoneNumber)
        user.setEmail(responseData.email)
        user.setAddress(responseData.address)
        user.setAuthKey(responseData.authKey)
        user.setUserType(responseData.userType)
        user.setUserStatus(responseData.userStatus)
      return user
    },error=>{
      console.log(error)
    })
  }

  resetUserPassword(user:User):Promise<string|void>{
    return this.wsTask.doPost('/user/resetPassword',user).then((data:any)=>{
      let responseData = data
      if(responseData.message && responseData.message!='Success.'){
        return JSON.stringify(responseData)
      }else{
        alert('แก้ไขรหัสผ่านสำเร็จ')
        this.router.navigate(['/'])
      }
    },error=>{
      console.log(error)
    })
  }

}
