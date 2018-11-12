import { Injectable } from '@angular/core';
import { WsTaskService } from '../ws-task.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Company } from 'src/app/entity/company';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddCompanyControllerService {

  constructor(private router:Router,private wsTask:WsTaskService,private localSt:LocalStorageService) { }

  addCompany(company:Company):Promise<string|void>{
      return this.wsTask.doPost('/create/company?authKey='+this.localSt.retrieve('authKey'),company).then((data:any)=>{
        let responseData = data
        if(responseData.message && responseData.message != 'Success.'){
          return JSON.stringify(responseData)
        }else{
          alert('เพิ่มข้อมูล บริษัทนำเข้าสำเร็จ');
          this.router.navigate(['/list-all-companies'])
        }
      })
  }

}
