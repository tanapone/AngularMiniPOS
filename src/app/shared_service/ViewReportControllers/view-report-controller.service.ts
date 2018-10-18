import { Injectable } from '@angular/core';
import { Order } from 'src/app/entity/order';
import { OrderDetail } from 'src/app/entity/order-detail';
import { Product } from 'src/app/entity/product';
import { Category } from 'src/app/entity/category';
import { Company } from 'src/app/entity/company';
import { User } from 'src/app/entity/user';
import { WsTaskService } from '../ws-task.service';
import { LocalStorageService } from 'ngx-webstorage';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ViewReportControllerService {

  constructor(private wsTask:WsTaskService,private localSt:LocalStorageService,private datePipe: DatePipe) { }

  getOrderByDate(date:Date):Promise<Order[]|void>{
    let trasformedDate:string=null;
    trasformedDate = this.datePipe.transform(date,'yyyy-MM-dd');
    return this.wsTask.doGet('/order/'+trasformedDate+'?authKey='+this.localSt.retrieve('authKey')).then((data:any)=>{
      let responseData = data;
      let orders = new Array<Order>();
      if(responseData!=null){
        
        for(let order of responseData){
          //Define order
          let resOrder = new Order();
          resOrder.setId(order.id);
          resOrder.setOrderDate(order.orderDate);
          resOrder.setProfit(order.profit);
          resOrder.setSumPrice(order.sumPrice);
          //Define user
          let user = new User();
          user.setId(order.user.id);
          user.setUsername(order.user.username);
          user.setPassword(order.user.password);
          user.setUserType(order.user.userType);
          user.setFirstName(order.user.firstName);
          user.setLastName(order.user.lastName);
          user.setEmail(order.user.email);
          user.setPhoneNumber(order.user.phoneNumber);
          user.setAddress(order.user.address);
          user.setUserStatus(order.user.userStauts);
          user.setAuthKey(order.user.authKey);
          //Define OrderDetail
          let orderDetails = new Array<OrderDetail>();
          for(let orderDetail of order.orderDetails){
            let resOrderDetail = new OrderDetail();
            resOrderDetail.setProductAmount(orderDetail.productAmount);
            //Define product in order detail
            let resProduct = new Product();
              // Company
              let resCompany = new Company();
              resCompany.setId(orderDetail.product.company.id);
              resCompany.setCompanyName(orderDetail.product.company.companyName);
              resCompany.setCompanyAddress(orderDetail.product.company.companyAddress);
              resCompany.setCompanyPhoneNumber(orderDetail.product.company.companyPhoneNumber);
              resCompany.setCompanyEmail(orderDetail.product.company.companyEmail);
              // Category
              let resCategory = new Category();
              resCategory.setId(orderDetail.product.category.id);
              resCategory.setCategoryName(orderDetail.product.category.categoryName);
              // Products
              resProduct.setId(orderDetail.product.id);
              resProduct.setProductName(orderDetail.product.productName);
              resProduct.setProductBarcodeID(orderDetail.product.productBarcodeID);
              resProduct.setProductCapitalPrice(orderDetail.product.productCapitalPrice);
              resProduct.setProductSalePrice(orderDetail.product.productSalePrice);
              resProduct.setProductMinimum(orderDetail.product.productMinimum);
              resProduct.setProductQty(orderDetail.product.productQty);
              // Set category and company
              resProduct.setCategory(resCategory);
              resProduct.setCompany(resCompany);
              resOrderDetail.setProduct(resProduct);

              orderDetails.push(resOrderDetail);
          }
          resOrder.setOrderDetails(orderDetails);
          resOrder.setUser(user);
          orders.push(resOrder);
        }
      }
      return orders;
    },error=>{
      console.log(error);
    })
    
  }

  getOrderByBeetweenDate(startDate:Date, endDate:Date):Promise<Order[]|void>{
    let trasformedStartDate:string=null;
    trasformedStartDate = this.datePipe.transform(startDate,'yyyy-MM-dd');
    let trasformedEndDate:string=null;
    trasformedEndDate = this.datePipe.transform(endDate,'yyyy-MM-dd');

    return this.wsTask.doGet('/order/'+trasformedStartDate+'/'+trasformedEndDate+'?authKey='+this.localSt.retrieve('authKey')).then((data:any)=>{
      let responseData = data;
      let orders = new Array<Order>();
      if(responseData!=null){
        
        for(let order of responseData){
          //Define order
          let resOrder = new Order();
          resOrder.setId(order.id);
          resOrder.setOrderDate(order.orderDate);
          resOrder.setProfit(order.profit);
          resOrder.setSumPrice(order.sumPrice);
          //Define user
          let user = new User();
          user.setId(order.user.id);
          user.setUsername(order.user.username);
          user.setPassword(order.user.password);
          user.setUserType(order.user.userType);
          user.setFirstName(order.user.firstName);
          user.setLastName(order.user.lastName);
          user.setEmail(order.user.email);
          user.setPhoneNumber(order.user.phoneNumber);
          user.setAddress(order.user.address);
          user.setUserStatus(order.user.userStauts);
          user.setAuthKey(order.user.authKey);
          //Define OrderDetail
          let orderDetails = new Array<OrderDetail>();
          for(let orderDetail of order.orderDetails){
            let resOrderDetail = new OrderDetail();
            resOrderDetail.setProductAmount(orderDetail.productAmount);
            //Define product in order detail
            let resProduct = new Product();
              // Company
              let resCompany = new Company();
              resCompany.setId(orderDetail.product.company.id);
              resCompany.setCompanyName(orderDetail.product.company.companyName);
              resCompany.setCompanyAddress(orderDetail.product.company.companyAddress);
              resCompany.setCompanyPhoneNumber(orderDetail.product.company.companyPhoneNumber);
              resCompany.setCompanyEmail(orderDetail.product.company.companyEmail);
              // Category
              let resCategory = new Category();
              resCategory.setId(orderDetail.product.category.id);
              resCategory.setCategoryName(orderDetail.product.category.categoryName);
              // Products
              resProduct.setId(orderDetail.product.id);
              resProduct.setProductName(orderDetail.product.productName);
              resProduct.setProductBarcodeID(orderDetail.product.productBarcodeID);
              resProduct.setProductCapitalPrice(orderDetail.product.productCapitalPrice);
              resProduct.setProductSalePrice(orderDetail.product.productSalePrice);
              resProduct.setProductMinimum(orderDetail.product.productMinimum);
              resProduct.setProductQty(orderDetail.product.productQty);
              // Set category and company
              resProduct.setCategory(resCategory);
              resProduct.setCompany(resCompany);
              resOrderDetail.setProduct(resProduct);

              orderDetails.push(resOrderDetail);
          }
          resOrder.setOrderDetails(orderDetails);
          resOrder.setUser(user);
          orders.push(resOrder);
        }
      }
      return orders;
    },error=>{
      console.log(error);
    })
  }

  getOrderByQuater(quater:number,year:number){
      return this.wsTask.doGet('/order/quater/'+quater+'/'+year+'?authKey='+this.localSt.retrieve('authKey')).then((data:any)=>{
        let responseData = data;
      let orders = new Array<Order>();
      if(responseData!=null){
        
        for(let order of responseData){
          //Define order
          let resOrder = new Order();
          resOrder.setId(order.id);
          resOrder.setOrderDate(order.orderDate);
          resOrder.setProfit(order.profit);
          resOrder.setSumPrice(order.sumPrice);
          //Define user
          let user = new User();
          user.setId(order.user.id);
          user.setUsername(order.user.username);
          user.setPassword(order.user.password);
          user.setUserType(order.user.userType);
          user.setFirstName(order.user.firstName);
          user.setLastName(order.user.lastName);
          user.setEmail(order.user.email);
          user.setPhoneNumber(order.user.phoneNumber);
          user.setAddress(order.user.address);
          user.setUserStatus(order.user.userStauts);
          user.setAuthKey(order.user.authKey);
          //Define OrderDetail
          let orderDetails = new Array<OrderDetail>();
          for(let orderDetail of order.orderDetails){
            let resOrderDetail = new OrderDetail();
            resOrderDetail.setProductAmount(orderDetail.productAmount);
            //Define product in order detail
            let resProduct = new Product();
              // Company
              let resCompany = new Company();
              resCompany.setId(orderDetail.product.company.id);
              resCompany.setCompanyName(orderDetail.product.company.companyName);
              resCompany.setCompanyAddress(orderDetail.product.company.companyAddress);
              resCompany.setCompanyPhoneNumber(orderDetail.product.company.companyPhoneNumber);
              resCompany.setCompanyEmail(orderDetail.product.company.companyEmail);
              // Category
              let resCategory = new Category();
              resCategory.setId(orderDetail.product.category.id);
              resCategory.setCategoryName(orderDetail.product.category.categoryName);
              // Products
              resProduct.setId(orderDetail.product.id);
              resProduct.setProductName(orderDetail.product.productName);
              resProduct.setProductBarcodeID(orderDetail.product.productBarcodeID);
              resProduct.setProductCapitalPrice(orderDetail.product.productCapitalPrice);
              resProduct.setProductSalePrice(orderDetail.product.productSalePrice);
              resProduct.setProductMinimum(orderDetail.product.productMinimum);
              resProduct.setProductQty(orderDetail.product.productQty);
              // Set category and company
              resProduct.setCategory(resCategory);
              resProduct.setCompany(resCompany);
              resOrderDetail.setProduct(resProduct);

              orderDetails.push(resOrderDetail);
          }
          resOrder.setOrderDetails(orderDetails);
          resOrder.setUser(user);
          orders.push(resOrder);
        }
      }
      return orders;
    },error=>{
      console.log(error);
    })
  }
}
