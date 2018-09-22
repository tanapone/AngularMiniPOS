import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entity/category';
import { Company } from 'src/app/entity/company';
import { Product } from 'src/app/entity/product';
import { ListAllCategoriesControllerService } from 'src/app/shared_service/categoryControllers/list-all-categories-controller.service';
import { ListAllCompaniesControllerService } from 'src/app/shared_service/companyControllers/list-all-companies-controller.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AddProductControllerService } from 'src/app/shared_service/productControllers/add-product-controller.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  form:FormGroup;
  companies = new Array<Company>();
  categories = new Array<Category>();
  errMsg:string=''


  constructor(private addProductController:AddProductControllerService,private listAllCategoriesController:ListAllCategoriesControllerService,private listAllCompaniesCompaniesController:ListAllCompaniesControllerService) { }

  addProduct(form){
    let product = new Product();
    product.setProductName(form.value.productName)
    product.setProductBarcodeID(form.value.productBarcodeID)
    product.setCompany(form.value.company)
    product.setCategory(form.value.category)
    product.setProductCapitalPrice(form.value.productCapitalPrice)
    product.setProductSalePrice(form.value.productSalePrice)
    product.setProductMinimum(form.value.productMinimum)
    product.setProductQty(form.value.productQty)
    product.setProductStatus(form.value.productStatus)

    this.addProductController.addProduct(product).then((res:any)=>{
      if(res){
        let responseData = JSON.parse(res)
        if(responseData.message){
          if(responseData.message=='Please change product name.'){
            this.errMsg = 'กรุณาเปลี่ยนชื่อสินค้า เนื่องจากมีสินค้าที่ใช้ชื่อนี้อยู่'
          }else if(responseData.message=='Please change product barcode.'){
            this.errMsg = 'กรุณาเปลี่ยนรหัสบาร์โค้ดสินค้า เนื่องจากมีสินค้าใช้บาร์โค้ดนี้อยู่'
          }
        }
      }

    })
  }

  getAllCompanies(){
    this.listAllCompaniesCompaniesController.getAllCompanies().then((res:Company[])=>{
      this.companies = res
    })
  }

  getAllCategories(){
    this.listAllCategoriesController.getAllCategories().then((res:Category[])=>{
      this.categories = res
    })
  }

  ngOnInit() {
    this.getAllCompanies();
    this.getAllCategories();
    this.form = new FormGroup({
      productName: new FormControl('',Validators.required),
      productBarcodeID: new FormControl('',Validators.required),
      productCapitalPrice: new FormControl('',Validators.min(1)),
      productSalePrice: new FormControl('',Validators.min(1)),
      productMinimum: new FormControl('',Validators.min(1)),
      productQty: new FormControl('',Validators.min(1)),
      company: new FormControl('',Validators.required),
      category: new FormControl('',Validators.required),
      productStatus: new FormControl('')
    });

  }


}
