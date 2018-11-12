import { Component, OnInit } from '@angular/core';
import { ListAllInvoiceControllerService } from 'src/app/shared_service/invoiceControllers/list-all-invoice-controller.service';
import { Invoice } from 'src/app/entity/invoice';

@Component({
  selector: 'app-list-all-invoice',
  templateUrl: './list-all-invoice.component.html',
  styleUrls: ['./list-all-invoice.component.css']
})
export class ListAllInvoiceComponent implements OnInit {

  private invoices = new Array<Invoice>();
  constructor(private listAllInvoiceController:ListAllInvoiceControllerService) { }
  
  getAllInvoices(){
    this.listAllInvoiceController.getAllInvoices().then((res:Invoice[])=>{
      this.invoices = res;
    })
  }

  checkProductIn(invoice:Invoice):string{
    let allProductIn:boolean = true;
    let reusultText:string ='';
    for(let invoiceDetail of invoice.getInvoiceDetails()){
     
      if(invoiceDetail.getProductInQuantity() != invoiceDetail.getQuantity()){
        allProductIn = false;
        break;
      }
    }
    if(allProductIn){
      reusultText = 'ดำเนินการสำเร็จ';
    }else{
      reusultText = 'รอการดำเนินการ'
    }
    return reusultText;
  }

  invoiceForCompany(invoice:Invoice):String{
    return invoice.getCompany().getCompanyName();
  }

  ngOnInit() {
    this.getAllInvoices();
  }

}
