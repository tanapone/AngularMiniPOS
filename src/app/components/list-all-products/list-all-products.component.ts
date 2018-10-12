import { Component, OnInit } from '@angular/core';
import { ListAllProductsControllerService } from 'src/app/shared_service/productControllers/list-all-products-controller.service';
import { Product } from 'src/app/entity/product';
import { RemoveProductControllerService } from 'src/app/shared_service/productControllers/remove-product-controller.service'

@Component({
  selector: 'app-list-all-products',
  templateUrl: './list-all-products.component.html',
  styleUrls: ['./list-all-products.component.css']
})
export class ListAllProductsComponent implements OnInit {

  products = new Array<Product>();
  errModalMsg:string = ''
  constructor(private removeProductController:RemoveProductControllerService,private listAllProductController:ListAllProductsControllerService) { }

  getAllProducts(){
    this.listAllProductController.getAllProducts().then((res:Product[])=>{
      this.products = res
    })
  }

  removeProduct(id:Number){
    this.removeProductController.removeProduct(id).then((res:any)=>{
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
          this.getAllProducts()
      }
    }
    })
  }

  checkProductStatus(product:Product):string{
    let result:string;
    if(product.getProductStatus()==true){
      result = 'สินค้ายังคงขายอยู่'
    }else{
      result = 'ไม่มีการขายสินค้านี้แล้ว'
    }
    return result;
  }

  ngOnInit() {
    this. getAllProducts()
  }

}
