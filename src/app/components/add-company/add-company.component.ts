import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Company } from 'src/app/entity/company';
import { AddCompanyControllerService } from 'src/app/shared_service/companyControllers/add-company-controller.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  form:FormGroup;
  errMsg:string='';

  constructor(private addCompanyController:AddCompanyControllerService) { }

  addCompany(form){
    let company = new Company();
    company.setCompanyName(form.value.companyName)
    company.setCompanyPhoneNumber(form.value.companyPhoneNumber)
    company.setCompanyEmail(form.value.companyEmail)
    company.setCompanyAddress(form.value.companyAddress)
    this.addCompanyController.addCompany(company).then((res:any)=>{
        if(res){
          let responseData = JSON.parse(res)
          if(responseData.message){
            if(responseData.message == 'Please change company name.'){
              this.errMsg = 'กรุณาเปลี่ยนชื่อ บริษัทนำเข้า เนื่องจากมีชื่อบริษัทนี้อยู่แล้ว'
            }
          }
        }
    })
  }

  ngOnInit() {
    this.form = new FormGroup({
      companyName: new FormControl('',Validators.required),
      companyPhoneNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(9),Validators.maxLength(10)]),
      companyEmail: new FormControl('',[Validators.required,Validators.email]),
      companyAddress: new FormControl('',Validators.required)
    })
  }

}
