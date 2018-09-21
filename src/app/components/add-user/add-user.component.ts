import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';
import { AddUserContollerService } from '../../shared_service/userControllers/add-user-contoller.service'
import { FormGroup,FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form: FormGroup;
  errMsg:string = ''

  constructor(private addUserController:AddUserContollerService) { }


  addUser(form){
    let user = new User();
    user.setUsername(form.value.username)
    user.setPassword(form.value.password)
    user.setEmail(form.value.email)
    user.setFirstName(form.value.firstName)
    user.setLastName(form.value.lastName)
    user.setPhoneNumber(form.value.phoneNumber)
    user.setUserType(form.value.userType)
    user.setAddress(form.value.address)
    this.addUserController.addUser(user).then((res:any)=>{
      if(res){
      let responseData = JSON.parse(res)
      if(responseData.message){
        if(responseData.message=='Please change username.'){
          this.errMsg = 'กรุณาเปลี่ยนชื่อบัญชีผู้ใช้'
        }else if(responseData.message=='Please change email.'){
          this.errMsg = 'กรุณาเปลี่ยนอีเมล'
        }
      }
    }
    })
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      retypePassword: new FormControl('',Validators.required),
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      phoneNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(9),Validators.maxLength(10)]),
      address: new FormControl('',Validators.required),
      userType: new FormControl('',Validators.required)
    })
  }

}
