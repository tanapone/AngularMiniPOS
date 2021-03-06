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
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
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
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { EditCategoryDetailsComponent } from './components/edit-category-details/edit-category-details.component';
import { EditCompanyDetailsComponent } from './components/edit-company-details/edit-company-details.component';
import { ListAllProductsComponent } from './components/list-all-products/list-all-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductDetailsComponent } from './components/edit-product-details/edit-product-details.component';
import { ResetUserPasswordComponent } from './components/reset-user-password/reset-user-password.component';
import { ListLowStockComponent } from './components/list-low-stock/list-low-stock.component';
import { ListAllInvoiceComponent } from './components/list-all-invoice/list-all-invoice.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';
import { ViewReportsComponent } from './components/view-reports/view-reports.component';
//Service
import { WsTaskService } from './shared_service/ws-task.service';
import { LoginControllerService } from './shared_service/loginControllers/login-controller.service'
import { ListAllUserControllerService } from './shared_service/userControllers/list-all-user-controller.service';
import { AddUserContollerService } from './shared_service/userControllers/add-user-contoller.service';
import { RemoveUserControllerService } from './shared_service/userControllers/remove-user-controller.service';
import { ListAllCategoriesControllerService } from './shared_service/categoryControllers/list-all-categories-controller.service';

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
      path:'reset-user-password',
      component:ResetUserPasswordComponent
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
      path:'edit/user/:username',
      component:EditUserDetailsComponent
    },
    {
      path:'list-all-companies',
      component:ListAllCompaniesComponent
    },
    {
      path:'create/company',
      component:AddCompanyComponent
    },
    {
      path:'edit/company/:id',
      component:EditCompanyDetailsComponent
    },
    {
      path:'list-all-categories',
      component:ListAllCategoriesComponent
    },
    {
      path:'create/category',
      component:AddCategoryComponent
    },
    {
      path:'edit/category/:id',
      component:EditCategoryDetailsComponent
    },
    {
      path:'list-all-products',
      component:ListAllProductsComponent
      
    },
    {
      path:'create/product',
      component:AddProductComponent
    },
    {
      path:'edit/product/:id',
      component:EditProductDetailsComponent
    },
    {
      path:'list-all-low-stock',
      component:ListLowStockComponent
    },
    {
      path:'list-all-invoice',
      component:ListAllInvoiceComponent
    },
    {
      path:'update-stock/:id',
      component:UpdateStockComponent
    },
    {
      path:'view-reports',
      component:ViewReportsComponent
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
    EditCompanyDetailsComponent,
    ListAllProductsComponent,
    AddProductComponent,
    EditProductDetailsComponent,
    ResetUserPasswordComponent,
    ListLowStockComponent,
    ListAllInvoiceComponent,
    UpdateStockComponent,
    ViewReportsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule,
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
    ListAllCategoriesControllerService,
    DatePipe

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
