import { Injectable } from '@angular/core';
import { WsTaskService } from '../ws-task.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Company } from 'src/app/entity/company';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EditCompanyDetailsControllerService {

  constructor(private router:Router,private wsTask:WsTaskService,private localSt:LocalStorageService) { }

  editCompanyDetails(company:Company){
    return this.wsTask.doPost('/update/company/?authKey='+this.localSt.retrieve('authKey'),company).then((data:any)=>{
      let responseData = data
      if(responseData.message){
        return JSON.stringify(responseData)
      }else{
        this.router.navigate(['/list-all-companies'])
      }
    },error=>{
      console.log(error)
    })
  }

  getCompany(id:Number):Promise<Company|void>{
    return this.wsTask.doGet('/company/'+id+'?authKey='+this.localSt.retrieve('authKey')).then((data:any)=>{
      let responseData = data
      let resCompany = new Company();
        resCompany.setId(responseData.id)
        resCompany.setCompanyName(responseData.companyName)
        resCompany.setCompanyPhoneNumber(responseData.companyPhoneNumber)
        resCompany.setCompanyEmail(responseData.companyEmail)
        resCompany.setCompanyAddress(responseData.companyAddress)
      return resCompany
    },error=>{
      console.log(error)
    })
  }

}
