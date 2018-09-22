import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms'
import { Category } from 'src/app/entity/category'
import { EditCategoryDetailsControllerService } from 'src/app/shared_service/categoryControllers/edit-category-details-controller.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category-details',
  templateUrl: './edit-category-details.component.html',
  styleUrls: ['./edit-category-details.component.css']
})
export class EditCategoryDetailsComponent implements OnInit {

  form:FormGroup;
  category = new Category();
  id:Number
  errMsg:string=''
  constructor(private route:ActivatedRoute,private editCategoryDetailsController:EditCategoryDetailsControllerService) { }

  editCategoryDetails(form){
      this.editCategoryDetailsController.editCategoryDetails(this.category).then((res:any)=>{
        if(res){
          let responseData = JSON.parse(res)
          if(responseData.message){
            if(responseData.message=='Please change category name.'){
              this.errMsg = 'กรุณาเปลี่ยนชื่อประเภทสินค้า เนื่องจากมีประเภทสินค้านี้อยู่แล้ว'
            }else if(responseData.message=='no category detail.'){
              this.errMsg = 'ไม่พบข้อมูลประเภทสินค้า'
            }
          }
        }
      })
  }

  getCategory(id:Number){
    this.editCategoryDetailsController.getCategory(id).then((res:Category)=>{
      this.category = res
      console.log(this.category)
    })
    
  }

  ngOnInit() {
    this.form = new FormGroup({
      categoryName: new FormControl('',Validators.required),
    })
    this.id = this.route.snapshot.params['id']
    this.getCategory(this.id)
  }

}
