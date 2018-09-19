//Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2Webstorage } from 'ngx-webstorage';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'angular-custom-modal'
//Component
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { ListAllUserComponent } from './components/list-all-user/list-all-user.component'
import { EditUserDetailsComponent } from './components/edit-user-details/edit-user-details.component';
import { AddUserComponent } from './components/add-user/add-user.component'
//Service
import { WsTaskService } from './shared_service/ws-task.service';
import { LoginControllerService } from './shared_service/login-controller.service'
import { ListAllUserControllerService } from './shared_service/list-all-user-controller.service';
import { FooterComponent } from './components/footer/footer.component';

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
    },
    {
      path:'create/user',
      component:AddUserComponent
    },
    {
      path:'edit/user/:id',
      component:EditUserDetailsComponent
    }
  ]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ListAllUserComponent,
    EditUserDetailsComponent,
    AddUserComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    Ng2Webstorage,
    ReactiveFormsModule,
    ModalModule
  ],
  providers: [
    WsTaskService,
    LoginControllerService,
    ListAllUserControllerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
