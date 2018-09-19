import { Injectable } from '@angular/core';
import { User } from '../entity/user';
import { WsTaskService } from './ws-task.service';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class ListAllUserControllerService {

  constructor(private wsTask:WsTaskService,private localSt:LocalStorageService) { }
  apiUrl = environment.apiUrl;
  authKey = this.localSt.retrieve('authKey')
  getAllUsers():Promise<User[]|void>{
    return this.wsTask.doGet("/users?authKey="+this.authKey).then((data:any)=>{
      let responseData = data
      let users = new Array<User>();
      for(let user of responseData){
        let resUser = new User();
        resUser.setId(user.id)
        resUser.setUsername(user.username)
        resUser.setPassword(user.password)
        resUser.setFirstName(user.firstName)
        resUser.setUserType(user.userType)
        resUser.setEmail(user.email)
        resUser.setAddress(user.address)
        resUser.setPhoneNumber(user.phoneNumber)
        users.push(resUser)
      }
      return users
    })
  }
}
