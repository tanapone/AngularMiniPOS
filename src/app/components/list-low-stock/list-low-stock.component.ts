import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/entity/product';
import { Invoice } from 'src/app/entity/invoice';
import { InvoiceDetail } from 'src/app/entity/invoice-detail';
import { ListLowStockControllerService } from 'src/app/shared_service/productControllers/list-low-stock-controller.service';
import { CreateInvoiceControllerService } from 'src/app/shared_service/invoiceControllers/create-invoice-controller.service';

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
  sumPrice:0;
  companyName = '';

  constructor(private listLowStockController:ListLowStockControllerService,private createInvoiceController:CreateInvoiceControllerService) { }

  showproductsWantToPurchasedModal(){
    if(this.invoiceDetails.length<1){
      this.errMsg = 'กรุณาเลือกรายการสินค้าที่ต้องการสั่งซื้อ เพื่อทำรายการสั่งซื้อ';
      this.errModal.open();
    }else{
      this.productsWantToPurchasedModal.open()
    this.setInitInvoiceQty();
    //set sum capital price
    this.sumCapitalPrice();
    }
  }

  addProductToPurchased(product:Product){
  
   let newInvoiceDetail = new InvoiceDetail();

  if(this.invoiceDetails.length > 0){
    if(product.getCompany().getCompanyName() != this.invoiceDetails[0].getProduct().getCompany().getCompanyName()){
        alert('ใบเสร็จสามารถทำได้ทีละบริษัทเท่านั้น') 
    }else{
      newInvoiceDetail.setProduct(product);
      newInvoiceDetail.setProductCapitalPrice(product.getProductCapitalPrice());
      newInvoiceDetail.setProductInQuantity(0);
      this.invoiceDetails.push(newInvoiceDetail);
      this.companyName = 'ของบริษัท ' + this.invoiceDetails[0].getProduct().getCompany().getCompanyName();
      this.products = this.products.filter(item => item.getId() !== product.getId());
    }

    }else{
      newInvoiceDetail.setProduct(product);
      newInvoiceDetail.setProductCapitalPrice(product.getProductCapitalPrice());
      this.invoiceDetails.push(newInvoiceDetail);
      newInvoiceDetail.setProductInQuantity(0);
      this.companyName = 'ของบริษัท ' + this.invoiceDetails[0].getProduct().getCompany().getCompanyName();
      this.products = this.products.filter(item => item.getId() !== product.getId());
    }
  
  }

  removeProductToPurchased(product:Product){
    this.products.push(product);
    // this.productsWantToPurchased = this.productsWantToPurchased.filter(item => item.getId() !== product.getId());
    this.invoiceDetails = this.invoiceDetails.filter(item => item.getProduct().getId() != product.getId());
    this.companyName = ''
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

  sumCapitalPrice(){
  //loop set sumPrice
    this.sumPrice=0;
    for(let invoiceDetail of this.invoiceDetails){
      let capitalPrice = invoiceDetail.getProduct().getProductCapitalPrice();
      let sumCapitalPriceWithQty = (capitalPrice*invoiceDetail.getQuantity());
      this.sumPrice += sumCapitalPriceWithQty;
    }

  }

  createInvoice(){
    //convert date json to string and set
    this.settingDateInvoiceDetail();
    //set invoice company
    this.invoice.setCompany(this.invoiceDetails[0].getProduct().getCompany());
    //set invoiceDetails to invoice
    this.invoice.setInvoiceDetails(this.invoiceDetails);
    
    if(this.isInvoiceDetailsInvaildDate()){
      alert('กรุณากรอกข้อมูลวันที่ให้ถูกต้อง');
    }else{
      this.createInvoiceController.createInvoice(this.invoice).then((res:any)=>{
      })
    }



  }

  getLowStock(){
    this.listLowStockController.getLowStock().then((res:Product[])=>{
      this.products = res;
    })
  }

  setInitInvoiceQty(){
    for(let invoiceDetail of this.invoiceDetails){
      if(invoiceDetail.getQuantity()==null){
        invoiceDetail.setQuantity(1);
      }
    }
  }

  isInvoiceDetailsInvaildDate():boolean{
    let result = false;
    for(let invoiceDetail of this.invoice.getInvoiceDetails()){
      
      if(invoiceDetail.getProductInDate().toString() == 'Invalid Date'){
        result = true;
        console.log(result)
        break;
      }
      if(invoiceDetail.getProductInDate().getTime() < new Date().getTime()){
        result = true;
        console.log(result)
        break;
      }
    } 
    return result;
  }

  ngOnInit() {
    this.getLowStock();
  }

}
