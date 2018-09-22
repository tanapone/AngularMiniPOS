import { Injectable } from '@angular/core';
import { Product } from 'src/app/entity/product';
import { WsTaskService } from 'src/app/shared_service/ws-task.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AddProductControllerService {

  constructor(private router:Router,private wsTask:WsTaskService,private localSt:LocalStorageService) { }

  addProduct(product:Product):Promise<string|void>{
    return this.wsTask.doPost('/create/product?authKey='+this.localSt.retrieve('authKey'),product).then((data:any)=>{
      let responseData = data
      console.log(responseData)
      if(responseData.message){
        return JSON.stringify(responseData)
      }else{
        this.router.navigate(['/list-all-products'])
      }
    },error=>{
      console.log(error)
    })
  }


}
