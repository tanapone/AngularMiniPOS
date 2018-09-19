import { Injectable } from '@angular/core';
import { User } from 'src/app/entity/user';
import { WsTaskService } from './ws-task.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EditUserDetailsControllerService {

  constructor(private router:Router,private localSt:LocalStorageService,private wsTask:WsTaskService) { }

  getUser(id:Number):Promise<User|void>{
    return this.wsTask.doGet('/user/id/'+id+'?authKey='+this.localSt.retrieve('authKey')).then((data:any)=>{
      let responseData = data
      let user = new User();
        user.setId(responseData.id)
        user.setUsername(responseData.username)
        user.setPassword(responseData.password)
        user.setFirstName(responseData.firstName)
        user.setLastName(responseData.lastName)
        user.setPhoneNumber(responseData.phoneNumber)
        user.setEmail(responseData.email)
        user.setAddress(responseData.address)
        user.setAuthKey(responseData.authKey)
        user.setUserType(responseData.userType)
      return user
    },error=>{
      console.log(error)
    })
  }

  editUser(user:User):Promise<string|void>{
    return this.wsTask.doPost('/update/user'+'?authKey='+this.localSt.retrieve('authKey'),user).then((data:any)=>{
      let responseData = data
      if(responseData.message){
        return JSON.stringify(responseData)
      }else{
        this.router.navigate(['/list-all-users'])
      }
    },error=>{
      console.log(error)
    })
  }
  
}
