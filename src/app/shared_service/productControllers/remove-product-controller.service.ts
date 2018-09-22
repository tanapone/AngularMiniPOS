import { Injectable } from '@angular/core';
import { WsTaskService} from '../ws-task.service';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class RemoveProductControllerService {

  constructor(private wsTask:WsTaskService,private localSt:LocalStorageService) { }
  
  removeProduct(id:Number){
    return this.wsTask.doDelete('/delete/product/'+id+'?authKey='+this.localSt.retrieve('authKey')).then((data:any)=>{
      let responseData = data
      if(responseData.message){
        return JSON.stringify(responseData)
      }
    },error=>{
      console.log(error)
    })
  }
  
}
