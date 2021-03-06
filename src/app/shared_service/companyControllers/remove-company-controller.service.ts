import { Injectable } from '@angular/core';
import { WsTaskService} from '../ws-task.service';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class RemoveCompanyControllerService {

  constructor(private wsTask:WsTaskService,private localSt:LocalStorageService) { }
  
  removeCompany(id:Number):Promise<string|void>{
    return this.wsTask.doDelete('/delete/company/'+id+'?authKey='+this.localSt.retrieve('authKey')).then((data:any)=>{
      let responseData = data
      console.log(responseData)
      if(responseData.message){
        return JSON.stringify(responseData)
      }
    },error=>{
      console.log(error)
    })
  }

}
