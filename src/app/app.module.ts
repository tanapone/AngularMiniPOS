//Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { Ng2Webstorage } from 'ngx-webstorage'

//Component
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { ListAllUserComponent } from './components/list-all-user/list-all-user.component'
//Service
import { WsTaskService } from './shared_service/ws-task.service';
import { LoginControllerService } from './shared_service/login-controller.service'
import { ListAllUserControllerService } from './shared_service/list-all-user-controller.service'
  const appRoutes:Routes=[
    {
      path:'',
      component:LoginComponent
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'list-all-users',
      component:ListAllUserComponent
    }
  ]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ListAllUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    Ng2Webstorage,
  ],
  providers: [
    WsTaskService,
    LoginControllerService,
    ListAllUserControllerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
