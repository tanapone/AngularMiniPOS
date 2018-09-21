import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entity/category';
import { ListAllCategoriesControllerService } from '../../shared_service/categoryControllers/list-all-categories-controller.service';
import { RemoveCategoryControllerService } from '../../shared_service/categoryControllers/remove-category-controller.service';

@Component({
  selector: 'app-list-all-categories',
  templateUrl: './list-all-categories.component.html',
  styleUrls: ['./list-all-categories.component.css']
})
export class ListAllCategoriesComponent implements OnInit {

  private categories = new Array<Category>();
  constructor(private listAllCategoriesController:ListAllCategoriesControllerService,private removeCategoryController:RemoveCategoryControllerService) { }

  errModalMsg:string = ''

  getAllCategories(){
    this.listAllCategoriesController.getAllCategories().then((res:Category[])=>{
        this.categories = res
    })
  }

  removeCategory(id:Number){
    this.removeCategoryController.removeCategory(id).then((res:any)=>{
      if(res){
        let responseData = JSON.parse(res)
        if(responseData.message){
          if(responseData.message=='This category still have products.'){
            this.errModalMsg = 'ไม่สามารถลบประเภทสินค้านี้ได้เนื่องจากมีสินค้าใช้ประเภทสินค้านี้อยู่'
          }else if(responseData.message=='no category detail.'){
            this.errModalMsg = 'ไม่พบข้อมูลประเภทสินค้านี้ในระบบ'
          }
          if(this.errModalMsg!=''){
            alert(this.errModalMsg)
          }
          this.getAllCategories()
      }
    }
    })
  }

  ngOnInit() {
    this.getAllCategories()
  }

}
