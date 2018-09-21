import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';  
import { WsTaskService } from './ws-task.service';

@Injectable({
  providedIn: 'root'
})
export class RemoveCategoryControllerService {

  constructor(private wsTask:WsTaskService,private localSt:LocalStorageService) { }

  removeCategory(id:Number):Promise<string|void>{
   return this.wsTask.doDelete('/delete/category/'+id+'?authKey='+this.localSt.retrieve('authKey')).then((data:any)=>{
      console.log(data)
      let responseData = data
      if(responseData.message){
        return JSON.stringify(responseData)
      }
    },error=>{
      console.log(error)
    })
  }

}
