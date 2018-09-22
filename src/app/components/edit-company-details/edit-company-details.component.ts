import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/entity/company';
import { EditCompanyDetailsControllerService } from 'src/app/shared_service/companyControllers/edit-company-details-controller.service'
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-edit-company-details',
  templateUrl: './edit-company-details.component.html',
  styleUrls: ['./edit-company-details.component.css']
})
export class EditCompanyDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private editCompanyDetailsController:EditCompanyDetailsControllerService, ) { }
  
  form:FormGroup;
  id:Number;
  errMsg:string=''
  company = new Company();

  editCompanyDetails(form){
    this.editCompanyDetailsController.editCompanyDetails(this.company).then((res:any)=>{
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

  getCompany(id:Number){
    this.editCompanyDetailsController.getCompany(id).then((res:Company)=>{
      this.company = res
    })
  }

  ngOnInit() {
    this.form = new FormGroup({
      companyName: new FormControl('',Validators.required),
      companyPhoneNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(9),Validators.maxLength(10)]),
      companyEmail: new FormControl('',[Validators.required,Validators.email]),
      companyAddress: new FormControl('',Validators.required)
    })
    this.id = this.route.snapshot.params['id']
    this.getCompany(this.id)
  }

}
