import { Injectable } from '@angular/core';
import { Product } from 'src/app/entity/product';
import { Category } from 'src/app/entity/category';
import { Company } from 'src/app/entity/company';
import { WsTaskService } from '../ws-task.service';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class ListLowStockControllerService {

  constructor(private wsTask:WsTaskService,private localSt:LocalStorageService) { }

  getLowStock():Promise<Product[]|void>{
      return this.wsTask.doGet('/products/less?authKey='+this.localSt.retrieve('authKey')).then((data:any)=>{
        let responseData = data
        let products = new Array<Product>();
        for(let product of responseData){
          let resProduct = new Product();
          // Company
          let resCompany = new Company();
            resCompany.setId(product.company.id)
            resCompany.setCompanyName(product.company.companyName)
            resCompany.setCompanyAddress(product.company.companyAddress)
            resCompany.setCompanyPhoneNumber(product.company.companyPhoneNumber)
            resCompany.setCompanyEmail(product.company.companyEmail)
          // Category
          let resCategory = new Category();
            resCategory.setId(product.category.id)
            resCategory.setCategoryName(product.category.categoryName)
            // Products
            resProduct.setId(product.id)
            resProduct.setProductName(product.productName)
            resProduct.setProductBarcodeID(product.productBarcodeID)
            resProduct.setProductCapitalPrice(product.productCapitalPrice)
            resProduct.setProductSalePrice(product.productSalePrice)
            resProduct.setProductMinimum(product.productMinimum)
            resProduct.setProductQty(product.productQty)
            // Set category and company
            resProduct.setCategory(resCategory)
            resProduct.setCompany(resCompany)
  
          products.push(resProduct)
        }
        return products
      },error=>{
        console.log(error)
      })
  }

}
