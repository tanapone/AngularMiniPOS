import { Injectable } from '@angular/core';
import { WsTaskService } from '../ws-task.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Invoice } from 'src/app/entity/invoice';
import { InvoiceDetail } from 'src/app/entity/invoice-detail';
import { Product } from 'src/app/entity/product';
import { Company } from 'src/app/entity/company';
import { Category } from 'src/app/entity/category';

@Injectable({
  providedIn: 'root'
})
export class ListAllInvoiceControllerService {

  constructor(private wsTask:WsTaskService,private localSt:LocalStorageService) { }

  getAllInvoices():Promise<Invoice[]|void>{
    return this.wsTask.doGet('/invoices?authKey='+this.localSt.retrieve("authKey")).then((data:any)=>{
      let responseData = data
      let invoices = new Array<Invoice>();
      for(let invoice of responseData){
        let resInvoice = new Invoice();
        resInvoice.setId(invoice.id);
        resInvoice.setDate(invoice.invoiceDate);
        // Company
        let resCompany = new Company();
        resCompany.setId(invoice.company.id);
        resCompany.setCompanyName(invoice.company.companyName);
        resCompany.setCompanyAddress(invoice.company.companyAddress);
        resCompany.setCompanyPhoneNumber(invoice.company.companyPhoneNumber);
        resCompany.setCompanyEmail(invoice.company.companyEmail);

        resInvoice.setCompany(resCompany);

        let resInvoiceDetails = new Array<InvoiceDetail>();
        for(let invoiceDetail of invoice.invoiceDetails){
            let resInvoiceDetail = new InvoiceDetail();
            resInvoiceDetail.setProductInDate(invoiceDetail.productInDate);
            resInvoiceDetail.setProductInQuantity(invoiceDetail.productInQuantity);
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
        invoices.push(resInvoice);
      }
      return invoices;
    },error=>{
      console.log(error)
    })
  }


}
