import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/entity/company';
import { ListAllCompaniesControllerService } from 'src/app/shared_service/companyControllers/list-all-companies-controller.service';
import { RemoveCompanyControllerService } from 'src/app/shared_service/companyControllers/remove-company-controller.service';

@Component({
  selector: 'app-list-all-companies',
  templateUrl: './list-all-companies.component.html',
  styleUrls: ['./list-all-companies.component.css']
})
export class ListAllCompaniesComponent implements OnInit {

  private companies = new Array<Company>();
  constructor(private listAllcompaniesController:ListAllCompaniesControllerService,private removeCompanyController:RemoveCompanyControllerService) { }
  errModalMsg:string = ''
  getAllCompanies(){
    this.listAllcompaniesController.getAllCompanies().then((res:Company[])=>{
      this.companies = res
    })
  }

  removeCompany(id:Number){
    this.removeCompanyController.removeCompany(id).then((res:any)=>{
      if(res){
        let responseData = JSON.parse(res)
        if(responseData.message){
          if(responseData.message=='This category still have products.'){
            this.errModalMsg = 'ไม่สามารถลบบริษัทนำเข้าสินค้าได้เนื่องจากมีสินค้าใช้บริษัทนำเข้าสินค้านี้อยู่'
          }else if(responseData.message=='no category detail.'){
            this.errModalMsg = 'ไม่พบข้อมูลบริษัทนำเข้าสินค้านี้ในระบบ'
          }
          if(this.errModalMsg!=''){
            alert(this.errModalMsg)
          }
          this.getAllCompanies()
      }
    }
    })

  }

  ngOnInit() {
    this.getAllCompanies()
  }

}
