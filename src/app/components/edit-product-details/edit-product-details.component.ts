import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entity/category';
import { Company } from 'src/app/entity/company';
import { Product } from 'src/app/entity/product';
import { ListAllCategoriesControllerService } from 'src/app/shared_service/categoryControllers/list-all-categories-controller.service';
import { ListAllCompaniesControllerService } from 'src/app/shared_service/companyControllers/list-all-companies-controller.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { EditProductDetailsControllerService } from 'src/app/shared_service/productControllers/edit-product-details-controller.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product-details',
  templateUrl: './edit-product-details.component.html',
  styleUrls: ['./edit-product-details.component.css']
})
export class EditProductDetailsComponent implements OnInit {

  form:FormGroup;
  companies = new Array<Company>();
  categories = new Array<Category>();
  product = new Product();
  id:Number
  errMsg:string = ''
  selectedCompany:Number
  selectedCategory:Number

  constructor(private route:ActivatedRoute,private editProductDetailsController:EditProductDetailsControllerService,private listAllCategoriesController:ListAllCategoriesControllerService,private listAllCompaniesCompaniesController:ListAllCompaniesControllerService) { }

  getProduct(id:Number){
    this.editProductDetailsController.getProduct(id).then((res:Product)=>{
      this.product = res
      this.selectedCompany = this.product.getCompany().getId()
      this.selectedCategory = this.product.getCategory().getId()
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

  editProductDetails(form){
    let category = new Category();
    let company = new Company();

    category = this.categories.find(function(element){
      return element.getId()==form.value.category
    })

    company = this.companies.find(function(element){
      return element.getId()==form.value.company
    })

    this.product.setCategory(category)
    this.product.setCompany(company)
    
    this.editProductDetailsController.editProductDetails(this.product).then((res:any)=>{
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

  ngOnInit() {
    this.getAllCompanies()
    this.getAllCategories()
    this.id = this.route.snapshot.params['id']
    this.getProduct(this.id)
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
