import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ResetUserPasswordControllerService } from '../../shared_service/userControllers/reset-user-password-controller.service';
import { User } from '../../entity/user';
import { RegistrationValidator } from './password-matching-validator';

@Component({
  selector: 'app-reset-user-password',
  templateUrl: './reset-user-password.component.html',
  styleUrls: ['./reset-user-password.component.css']
})
export class ResetUserPasswordComponent implements OnInit {

  errMsg:String=''
  form: FormGroup;
  constructor(private route:ActivatedRoute,private resetUserPasswordController:ResetUserPasswordControllerService,private formBuilder: FormBuilder) { }
  authKey:String;
  user:User = new User();

  getUser(authKey:String){
    this.resetUserPasswordController.getUser(this.authKey).then((res:User)=>{
      this.user = res
      this.checkUser()
    })
  }

  checkUser(){
    if(this.user.getId()==undefined){
      console.log(this.user.getId())
      this.errMsg = 'ไม่พบข้อมูลผู้ใช้'
    }
  }
  resetUserPassword(form){
    this.user.setPassword(form.value.password)
    this.resetUserPasswordController.resetUserPassword(this.user)
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    }, {
      validator: RegistrationValidator.validate.bind(this)
    });
    
   this.route.queryParams.subscribe(params => {
      this.authKey = params['authKey'];
   });
    console.log(this.authKey)
    if(this.authKey==null){
      this.errMsg = 'เกิดข้อผิดพลาด ไม่พบรหัสการแก้ไขรหัสผ่าน'
    }else{
      this.getUser(this.authKey)
    }
  }

}
