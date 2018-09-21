import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/entity/user';
import { LocalStorageService } from 'ngx-webstorage';
import { LoginControllerService } from '../../shared_service/loginControllers/login-controller.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  apiUrl = environment.apiUrl;
  user = new User();

  username:''
  password:''

  errorMsg = {
    usernameRequired:false,
    passwordRequied:false,
    wrongAuthMessage:''
  }

  constructor(private loginController : LoginControllerService,private localSt:LocalStorageService) { }

     verifyLogin(){
      console.log('username : '+this.username +' password : '+this.password)
      if(this.username=="" || this.username==null || this.password=="" || this.password==null){
        this.errorMsg.wrongAuthMessage='กรุณากรอกชื่อบัญชี และ รหัสผ่าน'
      }else{
      this.user.setUsername(this.username);
      this.user.setPassword(this.password);
      this.loginController.verifyLogin(this.user).then((res:any)=>{
        let responseData = JSON.parse(res)
        if(responseData.message){
          if(responseData.message=='No permission.'){
            this.errorMsg.wrongAuthMessage = 'คุณไม่มีสิทธิ์ใช้งานในส่วนนี้'
          }else if(responseData.message=='Wrong username or password.'){
            this.errorMsg.wrongAuthMessage = 'ชื่อบัญชี หรือ รหัสผ่านไม่ถูกต้อง'
          }
        }
        console.log(responseData)
      })
      }
    }
    
    delete(){
      this.localSt.clear();
    }


  ngOnInit() {
  }

}
