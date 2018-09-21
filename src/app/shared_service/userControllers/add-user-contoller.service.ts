import { Injectable } from '@angular/core';
import { WsTaskService } from '../ws-task.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from "@angular/router";
import { User } from 'src/app/entity/user'
@Injectable({
  providedIn: 'root'
})
export class AddUserContollerService {

  constructor(private router:Router,private wsTask:WsTaskService,private localSt:LocalStorageService) { }
  
  addUser(user:User):Promise<string|void>{
  return this.wsTask.doPost('/create/user?authKey='+this.localSt.retrieve('authKey') ,user).then((data:any)=>{
        let responseData = data
        if(responseData.message){
          console.log(responseData.message)
          return JSON.stringify(responseData)
        }else{
          this.router.navigate(['/list-all-users'])
        }
      },error=>{
        console.log(error)
      })
  }

}
