import { Injectable } from '@angular/core';
import { WsTaskService } from '../ws-task.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Invoice } from 'src/app/entity/invoice';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateInvoiceControllerService {

  constructor(private router:Router,private wsTask:WsTaskService,private localSt:LocalStorageService) { }

  createInvoice(invoice:Invoice):Promise<string|void>{
    console.log(invoice)
      return this.wsTask.doPost('/create/invoice?authKey='+this.localSt.retrieve('authKey'),invoice).then((data:any)=>{
        let responseData = data
        if(responseData.message && responseData.message != 'Success.'){
          return JSON.stringify(responseData)
        }else{
          alert('สร้างใบสั่งซื้อสินค้า สำเร็จ')
          this.router.navigate(['/list-all-invoice'])
        }
      },error=>{
        console.log(error);
      })
  }
}
