import { Injectable } from '@angular/core';
import { WsTaskService } from '../ws-task.service';
import { Category } from 'src/app/entity/category';
import { LocalStorageService } from 'ngx-webstorage'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EditCategoryDetailsControllerService {

  constructor(private wsTask:WsTaskService,private localSt:LocalStorageService,private router:Router) { }
  
  editCategoryDetails(category:Category):Promise<string|void>{
     return this.wsTask.doPost('/update/category?authKey='+this.localSt.retrieve('authKey'),category).then((data:any)=>{
        let responseData = data
        if(responseData.message){
          return JSON.stringify(responseData)
        }else{
          this.router.navigate(['/list-all-categories'])
        }
      })
  }

  getCategory(id:Number):Promise<Category|void>{
    return this.wsTask.doGet('/category/'+id+'?authKey='+this.localSt.retrieve('authKey')).then((data:any)=>{
        let responseData = data
        let category = new Category()
        category.setId(responseData.id)
        category.setCategoryName(responseData.categoryName)
      return category
    })
  }
}
