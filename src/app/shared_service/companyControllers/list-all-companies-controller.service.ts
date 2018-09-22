import { Injectable } from '@angular/core';
import { WsTaskService } from '../ws-task.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Company } from 'src/app/entity/company';

@Injectable({
  providedIn: 'root'
})
export class ListAllCompaniesControllerService {
  constructor(private wsTask:WsTaskService,private localSt:LocalStorageService) { }

  getAllCompanies():Promise<Company[]|void>{
    return this.wsTask.doGet('/companies?authKey='+this.localSt.retrieve('authKey')).then((data:any)=>{
        let responseData = data
        let companies = new Array<Company>();
        for(let company of responseData){
          let resCompany = new Company();
            resCompany.setId(company.id)
            resCompany.setCompanyName(company.companyName)
            resCompany.setCompanyEmail(company.companyEmail)
            resCompany.setCompanyPhoneNumber(company.companyPhoneNumber)
            resCompany.setCompanyAddress(company.companyAddress)
          companies.push(resCompany)
        }
        return companies
    },error=>{
      console.log(error)
    })
  }

}
