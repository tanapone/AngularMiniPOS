import { Injectable } from '@angular/core';
import { User } from 'src/app/entity/user';
import { WsTaskService } from './ws-task.service';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginControllerService {

  apiUrl = environment.apiUrl;
  constructor(private router:Router,private wsTask:WsTaskService,private localSt:LocalStorageService) { }
  public  verifyLogin(user:User):Promise<string|void>{
    let newUser = new User();
    return this.wsTask.doPost("/login/admin",user).then((data:any)=>{
      let responseData = data
      if( responseData.message ){
        console.log(responseData.message)
        if(responseData.message){
          return JSON.stringify(responseData)
        }
        }else{
        newUser.setAuthKey(data.authKey)
        this.localSt.store('authKey',responseData.authKey)
        this.router.navigate(['/list-all-users']);
        console.log('seted')
        return JSON.stringify(newUser)
      }
      // return newUser
    },error=>{
      console.log(error)
    }
  )}
  
}
