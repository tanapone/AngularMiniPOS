import { Injectable } from '@angular/core';
import { WsTaskService } from '../ws-task.service';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class RemoveUserControllerService {

  constructor(private wsTask:WsTaskService,private localSt:LocalStorageService) { }

  removeUser(id:Number):Promise<void>{
   return this.wsTask.doDelete('/delete/user/'+id+'?authKey='+this.localSt.retrieve('authKey')).then((data:any)=>{
    },error=>{
      console.log(error)
    })
  }
}
