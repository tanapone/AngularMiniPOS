import { Injectable } from '@angular/core';
import { Category } from 'src/app/entity/category';
import { LocalStorageService } from 'ngx-webstorage';  
import { WsTaskService } from '../ws-task.service';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AddCategoryControllerService {

  constructor(private router:Router,private wsTask:WsTaskService,private localSt:LocalStorageService) { }

  addCategory(category:Category):Promise<string|void>{
      return this.wsTask.doPost('/create/category?authKey='+this.localSt.retrieve('authKey'),category).then((data:any)=>{
          let responseData = data
          if(responseData.message){
            return JSON.stringify(responseData)
          }else{
            this.router.navigate(['/list-all-categories'])
          }
      },error=>{
        console.log(error)
      })
  }

}
