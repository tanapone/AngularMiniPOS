import { Injectable } from '@angular/core';
import { WsTaskService } from '../ws-task.service';
import { Category } from 'src/app/entity/category';
import { LocalStorageService } from 'ngx-webstorage';  

@Injectable({
  providedIn: 'root'
})
export class ListAllCategoriesControllerService {

  constructor(private wsTask:WsTaskService,private localSt:LocalStorageService) { }
  
  getAllCategories():Promise<Category[]|void>{
    return this.wsTask.doGet('/categories?authKey='+this.localSt.retrieve('authKey')).then((data:any)=>{
      let responseData = data
      let categories = new Array<Category>()
      for(let category of responseData){
        let resCategory = new Category();
        resCategory.setId(category.id)
        resCategory.setCategoryName(category.categoryName)
        categories.push(resCategory)
      }
      return categories
    },error=>{
      console.log(error)
    })
  }

}
