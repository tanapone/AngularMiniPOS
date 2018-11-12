import { Injectable } from '@angular/core';
import { WsTaskService } from '../ws-task.service';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class RemoveUserControllerService {

  constructor(private wsTask:WsTaskService,private localSt:LocalStorageService) { }

  removeUser(username:string):Promise<string|void>{
   return this.wsTask.doDelete('/delete/user/'+username+'?authKey='+this.localSt.retrieve('authKey')).then((data:any)=>{
    let responseData = data
    if(responseData.message){
      return JSON.stringify(responseData)
    }
    },error=>{
      console.log(error)
    })
  }
}
