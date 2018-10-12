import { Component, OnInit } from '@angular/core';
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
  
  id:Number;
  private invoice = new Invoice();
  private isProductInDefault = new Array<boolean>();
  constructor(private route:ActivatedRoute,private updateStockController:UpdateStockControllerService) { }

  getInvoiceById(id:Number){
    this.updateStockController.getInvoiceById(id).then((res:Invoice)=>{
      this.invoice = res;
      this.setIsProductInDefault();
    })
  }
  

  updateInvoice(){
    this.updateStockController.updateInvoice(this.invoice).then((res:string)=>{
    })
  }
  
  checkProductIn(invoiceDetail:InvoiceDetail):boolean{
    let isProductIn:boolean = true;
    if(invoiceDetail.isProductIn()!=true){
      isProductIn = false;
    }
    return isProductIn;
  }

  reset(){
    this.getInvoiceById(this.id);
  }

  setIsProductInDefault(){
    for(let invoiceDetail of this.invoice.getInvoiceDetails()){
      this.isProductInDefault.push(invoiceDetail.isProductIn());
    }
  }
  

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getInvoiceById(this.id);
  }

}
