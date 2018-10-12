import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';
import { EditUserDetailsControllerService } from '../../shared_service/userControllers/edit-user-details-controller.service'
import { FormGroup,FormControl,Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.css']
})
export class EditUserDetailsComponent implements OnInit {

  form:FormGroup
  errMsg:string =''
  id:Number
  user = new User();

  prepareUserData = {
    

  }

  constructor(private route:ActivatedRoute,private editUserDetailsController:EditUserDetailsControllerService) { }

  editUser(form){
    this.editUserDetailsController.editUser(this.user).then((res:any)=>{
      if(res){
        let responseData = JSON.parse(res)
      if(responseData.message){
        if(responseData.message == 'Please change username.'){
          this.errMsg = 'กรุณาเปลี่ยนชื่อบัญชี'
        } else if (responseData.message == 'Please change email.'){
          this.errMsg = 'กรุณาเปลี่ยนอีเมล'
        }
      }
    }
    })
  }

  getUser(id:Number){
      this.editUserDetailsController.getUser(id).then((res:User)=>{
        this.user = res
      })
  }



  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('',Validators.required),
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      phoneNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(9),Validators.maxLength(10)]),
      address: new FormControl('',Validators.required),
      userStatus: new FormControl(''),
      userType: new FormControl('',Validators.required)
    })
    this.id = this.route.snapshot.params['id']
    this.getUser(this.id)
  }

}
