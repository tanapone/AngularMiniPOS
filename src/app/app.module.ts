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
import { FooterComponent } from './components/footer/footer.component';
import { ListAllCompaniesComponent } from './components/list-all-companies/list-all-companies.component';
import { ListAllCategoriesComponent } from './components/list-all-categories/list-all-categories.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
//Service
import { WsTaskService } from './shared_service/ws-task.service';
import { LoginControllerService } from './shared_service/loginControllers/login-controller.service'
import { ListAllUserControllerService } from './shared_service/userControllers/list-all-user-controller.service';
import { AddUserContollerService } from './shared_service/userControllers/add-user-contoller.service';
import { RemoveUserControllerService } from './shared_service/userControllers/remove-user-controller.service';
import { ListAllCategoriesControllerService } from './shared_service/categoryControllers/list-all-categories-controller.service';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { EditCategoryDetailsComponent } from './components/edit-category-details/edit-category-details.component';
import { EditCompanyDetailsComponent } from './components/edit-company-details/edit-company-details.component';

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
    },
    {
      path:'list-all-companies',
      component:ListAllCompaniesComponent
    },
    {
      path:'list-all-categories',
      component:ListAllCategoriesComponent
    },
    {
      path:'create/category',
      component:AddCategoryComponent
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
    FooterComponent,
    ListAllCompaniesComponent,
    ListAllCategoriesComponent,
    AddCategoryComponent,
    AddCompanyComponent,
    EditCategoryDetailsComponent,
    EditCompanyDetailsComponent
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
    ListAllUserControllerService,
    AddUserContollerService,
    RemoveUserControllerService,
    ListAllCategoriesControllerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
