import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms'
import { Category } from 'src/app/entity/category'
import { AddCategoryControllerService } from '../../shared_service/categoryControllers/add-category-controller.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  form:FormGroup;
  errMsg:string='';


  constructor(private addCategoryController:AddCategoryControllerService) { }

  addCategory(form){
    let category = new Category();
    category.setCategoryName(form.value.categoryName)
    this.addCategoryController.addCategory(category).then((res:any)=>{
      if(res){
        let responseData = JSON.parse(res)
        if(responseData.message){
          if(responseData.message=='Please change category name.'){
            this.errMsg='กรุณาเปลี่ยนชื่อประเภทสินค้า เนื่องจากมีประเภทสินค้านี้อยู่แล้ว'
          }
        }
      }
    })
  }

  ngOnInit() {
    this.form = new FormGroup({
      categoryName: new FormControl('',Validators.required)
    })
  }

}
