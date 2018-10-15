import { Component, OnInit,ViewChild } from '@angular/core';
import { ListAllProductsControllerService } from 'src/app/shared_service/productControllers/list-all-products-controller.service';
import { Product } from 'src/app/entity/product';
import { RemoveProductControllerService } from 'src/app/shared_service/productControllers/remove-product-controller.service'

@Component({
  selector: 'app-list-all-products',
  templateUrl: './list-all-products.component.html',
  styleUrls: ['./list-all-products.component.css']
})
export class ListAllProductsComponent implements OnInit {

  @ViewChild('confirmRemoveModal') confirmRemoveModal;
  @ViewChild('errorModal') errorModal;
  
  products = new Array<Product>();
  errModalMsg:string = ''
  constructor(private removeProductController:RemoveProductControllerService,private listAllProductController:ListAllProductsControllerService) { }

  getAllProducts(){
    this.listAllProductController.getAllProducts().then((res:Product[])=>{
      this.products = res
    })
  }

  removeProduct(id:Number){
    this.errModalMsg =''
    this.removeProductController.removeProduct(id).then((res:any)=>{
      if(res){
        let responseData = JSON.parse(res)
        if(responseData.message){
          if(responseData.message=='No product found.'){
            this.errModalMsg = 'ไม่พบข้อมูลสินค้านี้ในระบบ'
          }else if(responseData.message=='Product is in order please change product status.'){
            this.errModalMsg = 'สินค้านี้ได้มีการทำการซื้อขายแล้ว กรุณาเปลี่ยนสถานะสินค้าแทน เนื่องจากจะมีผลกระทบต่อยอดขาย'
          }else if(responseData.message=='Product is in invoice please change product status.'){
            this.errModalMsg = 'สินค้านี้ได้มีการทำการสั่งซื้อแล้ว กรุณาเปลี่ยนสถานะสินค้าแทน เนื่องจากจะมีผลกระทบต่อยอดขาย'
          }
          if(this.errModalMsg!=''){
           alert(this.errModalMsg)
          }else{
            this.getAllProducts()
          }
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
