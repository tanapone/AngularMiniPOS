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

  ngOnInit() {
    this.getAllInvoices();
  }

}
