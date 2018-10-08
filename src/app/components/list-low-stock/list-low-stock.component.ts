import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/entity/product';
import { Invoice } from 'src/app/entity/invoice';
import { InvoiceDetail } from 'src/app/entity/invoice-detail';
import { ListLowStockControllerService } from 'src/app/shared_service/productControllers/list-low-stock-controller.service';

@Component({
  selector: 'app-list-low-stock',
  templateUrl: './list-low-stock.component.html',
  styleUrls: ['./list-low-stock.component.css']
})
export class ListLowStockComponent implements OnInit {

  @ViewChild('productsWantToPurchasedModal') productsWantToPurchasedModal;
  @ViewChild('errModal') errModal;
  products = new Array<Product>();
  productsWantToPurchased = new Array<Product>();
  invoice = new Invoice();
  invoiceDetails = new Array<InvoiceDetail>();
  errMsg:string = '';
  sumPrice:Number;

  constructor(private listLowStockController:ListLowStockControllerService) { }

  showproductsWantToPurchasedModal(){
    if(this.invoiceDetails.length<1){
      this.errMsg = 'กรุณาเลือกรายการสินค้าที่ต้องการสั่งซื้อ เพื่อทำรายการสั่งซื้อ';
      this.errModal.open();
    }else{
      this.productsWantToPurchasedModal.open()
    }
  }

  sumTotalPrice(total,price){
    return total + price
  }

  addProductToPurchased(product:Product){
  this.products = this.products.filter(item => item.getId() !== product.getId());
   let newInvoiceDetail = new InvoiceDetail();
   newInvoiceDetail.setProduct(product);
   this.invoiceDetails.push(newInvoiceDetail);
  }

  removeProductToPurchased(product:Product){
    this.products.push(product);
    // this.productsWantToPurchased = this.productsWantToPurchased.filter(item => item.getId() !== product.getId());
    this.invoiceDetails = this.invoiceDetails.filter(item => item.getProduct().getId() != product.getId());
  }


  settingDateInvoiceDetail(){

    //Convert date json to format year-month-day 
    //this so wried but still work
    //i don't like 'date picker' anymore 

    this.invoiceDetails.forEach(function(invoiceDetail){
      let newDate:string;
      let invoiceDetailString = JSON.stringify(invoiceDetail.getProductInDate());
      let invoiceDetailJson = JSON.parse(invoiceDetailString);
      newDate = invoiceDetailJson.year+'-'+invoiceDetailJson.month+'-'+invoiceDetailJson.day
      invoiceDetail.setProductInDate(new Date(newDate));
    })
   
  }

  createInvoice(){

  }

  getLowStock(){
    this.listLowStockController.getLowStock().then((res:Product[])=>{
      this.products = res;
    })
  }

  ngOnInit() {
    this.getLowStock();
  }

}
