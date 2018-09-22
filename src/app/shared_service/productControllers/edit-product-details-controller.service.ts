import { Injectable } from '@angular/core';
import { Product } from 'src/app/entity/product';
import { WsTaskService } from 'src/app/shared_service/ws-task.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Category } from 'src/app/entity/category';
import { Company } from 'src/app/entity/company';

@Injectable({
  providedIn: 'root'
})
export class EditProductDetailsControllerService {

  constructor(private router:Router,private wsTask:WsTaskService,private localSt:LocalStorageService) { }

  getProduct(id:Number):Promise<Product|void>{
    return this.wsTask.doGet('/product/'+id+'?authKey='+this.localSt.retrieve('authKey')).then((data:any)=>{
      let responseData = data
        let resProduct = new Product();
        // Company
        let resCompany = new Company();
          resCompany.setId(responseData.company.id)
          resCompany.setCompanyName(responseData.company.companyName)
          resCompany.setCompanyAddress(responseData.company.companyAddress)
          resCompany.setCompanyPhoneNumber(responseData.company.companyPhoneNumber)
          resCompany.setCompanyEmail(responseData.company.companyEmail)
        // Category
        let resCategory = new Category();
          resCategory.setId(responseData.category.id)
          resCategory.setCategoryName(responseData.category.categoryName)
          // Products
          resProduct.setId(responseData.id)
          resProduct.setProductName(responseData.productName)
          resProduct.setProductBarcodeID(responseData.productBarcodeID)
          resProduct.setProductCapitalPrice(responseData.productCapitalPrice)
          resProduct.setProductSalePrice(responseData.productSalePrice)
          resProduct.setProductMinimum(responseData.productMinimum)
          resProduct.setProductQty(responseData.productQty)
          resProduct.setProductStatus(responseData.productStatus)
          // Set category and company
          resProduct.setCategory(resCategory)
          resProduct.setCompany(resCompany)
          console.log(resProduct)
          return resProduct
      },error=>{
        console.log(error)
      })
    }

    editProductDetails(product:Product):Promise<string|void>{
      return this.wsTask.doPost('/update/product?authKey='+this.localSt.retrieve('authKey'),product).then((data:any)=>{
        let responseData = data
        if(responseData.message){
          return JSON.stringify(responseData)
        }else{
          this.router.navigate(['/list-all-products'])
        }
      },error=>{
        console.log(error)
      })
    }

}
