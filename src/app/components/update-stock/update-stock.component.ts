import { Component, OnInit, ViewChild } from '@angular/core';
import { Invoice } from 'src/app/entity/invoice';
import { InvoiceDetail } from 'src/app/entity/invoice-detail';
import { ActivatedRoute } from '@angular/router';
import { UpdateStockControllerService } from 'src/app/shared_service/invoiceControllers/update-stock-controller.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {
  @ViewChild('confirmUpdateStock') confirmUpdateStock;

  id:Number;
  private invoice = new Invoice();
  private productInQuantityDefault = new Array<number>();
  constructor(private route:ActivatedRoute,private updateStockController:UpdateStockControllerService) { }

  getInvoiceById(id:Number){
    this.updateStockController.getInvoiceById(id).then((res:Invoice)=>{
      this.invoice = res;
      this.setIsProductInDefault();
    })
  }
  

  updateInvoice(){
    if(this.checkInvaildProductInQuantityValue()){
      this.confirmUpdateStock.close();
      alert('กรุณากรอกข้อมูลให้ถูกต้อง');
    }else{
          this.updateStockController.updateInvoice(this.invoice).then((res:string)=>{
    })
    }

  }
  
  checkProductIn(invoiceDetail:InvoiceDetail):boolean{
    let isProductIn:boolean = true;
    if(invoiceDetail.getProductInQuantity()!=invoiceDetail.getQuantity()){
      isProductIn = false;
    }
    return isProductIn;
  }

  reset(){
    this.getInvoiceById(this.id);
  }

  setIsProductInDefault(){
    for(let invoiceDetail of this.invoice.getInvoiceDetails()){
      this.productInQuantityDefault.push(invoiceDetail.getProductInQuantity());
    }
  }
  
  sumPrice():number {
    let sumPrice:number = 0;
    this.invoice.getInvoiceDetails().forEach(function(invoiceDetail){
        sumPrice += (invoiceDetail.getProductCapitalPrice()*invoiceDetail.getQuantity());
    })
    
    return sumPrice;
  }

  checkInvaildProductInQuantityValue():boolean{
    let result = false;
    let productInQuantityDefault = this.productInQuantityDefault;
    this.invoice.getInvoiceDetails().forEach(function(invoiceDetail,index){

      if(invoiceDetail.getProductInQuantity()>invoiceDetail.getQuantity()){
        result =true;
      }
      if(invoiceDetail.getProductInQuantity()<0){
        result =true;
      }
      if(invoiceDetail.getProductInQuantity() < productInQuantityDefault[index]){
        result = true;
      }

    })
    return result;
  }

  checkInvoiceDetailCompleate(index:number):boolean{
    let result = false;
    if(this.productInQuantityDefault[index] == this.invoice.getInvoiceDetails()[index].getQuantity()){
      result = true;
    }
    return result;
    }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getInvoiceById(this.id);
  }

}
