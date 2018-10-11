import { Injectable } from '@angular/core';
import { WsTaskService } from '../ws-task.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Invoice } from 'src/app/entity/invoice';
import { InvoiceDetail } from 'src/app/entity/invoice-detail';
import { Product } from 'src/app/entity/product';
import { Company } from 'src/app/entity/company';
import { Category } from 'src/app/entity/category';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UpdateStockControllerService {

  constructor(private router:Router,private datepipe: DatePipe,private wsTask:WsTaskService,private localSt:LocalStorageService) { }

  getInvoiceById(id:Number):Promise<Invoice|void>{
    return this.wsTask.doGet('/invoice/'+id+'?authKey='+this.localSt.retrieve('authKey')).then((data:any)=>{
      console.log('/invoice/'+id+'?autheKey='+this.localSt.retrieve('authKey'))
      let responseData = data;
      let resInvoice = new Invoice();
      resInvoice.setId(responseData.id);
      resInvoice.setDate(responseData.invoiceDate);
      resInvoice.setSumPrice(responseData.sumPrice);
      let resInvoiceDetails = new Array<InvoiceDetail>();
      for(let invoiceDetail of responseData.invoiceDetails){
        let resInvoiceDetail = new InvoiceDetail();
        resInvoiceDetail.setProductInDate(invoiceDetail.productInDate);
        resInvoiceDetail.setProductIn(invoiceDetail.productIn);
        resInvoiceDetail.setQuantity(invoiceDetail.quantity);

        let resProduct = new Product();
        // Company
        let resCompany = new Company();
        resCompany.setId(invoiceDetail.product.company.id);
        resCompany.setCompanyName(invoiceDetail.product.company.companyName);
        resCompany.setCompanyAddress(invoiceDetail.product.company.companyAddress);
        resCompany.setCompanyPhoneNumber(invoiceDetail.product.company.companyPhoneNumber);
        resCompany.setCompanyEmail(invoiceDetail.product.company.companyEmail);
       // Category
        let resCategory = new Category();
        resCategory.setId(invoiceDetail.product.category.id);
        resCategory.setCategoryName(invoiceDetail.product.category.categoryName);
        // Products
        resProduct.setId(invoiceDetail.product.id);
        resProduct.setProductName(invoiceDetail.product.productName);
        resProduct.setProductBarcodeID(invoiceDetail.product.productBarcodeID);
        resProduct.setProductCapitalPrice(invoiceDetail.product.productCapitalPrice);
        resProduct.setProductSalePrice(invoiceDetail.product.productSalePrice);
        resProduct.setProductMinimum(invoiceDetail.product.productMinimum);
        resProduct.setProductQty(invoiceDetail.product.productQty);
        // Set category and company
        resProduct.setCategory(resCategory);
        resProduct.setCompany(resCompany);
        resInvoiceDetail.setProduct(resProduct);

        resInvoiceDetails.push(resInvoiceDetail);
        }
      resInvoice.setInvoiceDetails(resInvoiceDetails);
      return resInvoice;
    },error=>{
      console.log(error);
    })
  }

  updateInvoice(invoice:Invoice):Promise<string|void>{
    invoice = this.setInvoiceDateFormat(invoice);
    return this.wsTask.doPost('/update/invoice?authKey='+this.localSt.retrieve('authKey'),invoice).then((data:any)=>{
      let responseData = data
      console.log(responseData)
      if(responseData.message){
        return JSON.stringify(responseData);
      }else{
        this.router.navigate(['/list-all-invoice']);
      }
    },error=>{
      console.log(error)
    })
  }

  convertDateFormat(date:Date){
    return this.datepipe.transform(date,'yyyy-MM-dd');
  }

  setInvoiceDateFormat(invoice:Invoice){
    let invoiceDate = this.convertDateFormat(invoice.getDate());
    invoice.setDate(new Date(invoiceDate));

    for(let invoiceDetail of invoice.getInvoiceDetails()){
      let invoiceDetailDate = this.convertDateFormat(invoiceDetail.getProductInDate());
      invoiceDetail.setProductInDate(new Date(invoiceDetailDate));
    }
    return invoice;
  }

}
