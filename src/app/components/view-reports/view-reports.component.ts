import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewReportControllerService } from 'src/app/shared_service/ViewReportControllers/view-report-controller.service';
import { Order } from 'src/app/entity/order';
import { DatePipe } from '@angular/common';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {

  @ViewChild('SearchByDateDialog') SearchByDateDialog;
  @ViewChild('SearchByBeetweenDateDialog') SearchByBeetweenDateDialog;
  @ViewChild('SearchByQuarterDialog') SearchByQuarterDialog;

  private orders = new Array<Order>();
  private orderByDatePickDate:NgbDate;
  private hoveredDate: NgbDate;
  private fromDate: NgbDate;
  private toDate: NgbDate;
  private showDateOrderText:string='';
  private quater:number;
  private yearOfQuater:number;

  constructor(private viewReportController:ViewReportControllerService,private datePipe:DatePipe,calendar: NgbCalendar) { 
    this.orderByDatePickDate = calendar.getToday();
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }
   
  convertDateFormatByPickDate(date:NgbDate):string{
      let newDate:string;
      let orderDate = JSON.stringify(date);
      let orderDateJson = JSON.parse(orderDate);
      newDate = orderDateJson.year+'-'+orderDateJson.month+'-'+orderDateJson.day
      return newDate;
  }

  // getOrderByDateBtn(){
  //   this.getOrdersByDate(this.orderByDatePickDate);
  // }

 // Hover date not functional just custom
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }
//
  getOrdersByDate(date:NgbDate){
    if(date == null){
      alert('กรุณาเลือกวันที่')
    }else{
    let convertedDate = this.convertDateFormatByPickDate(date);
    this.viewReportController.getOrderByDate(new Date(convertedDate)).then((res:Order[])=>{
      this.orders = res;
      this.showDateOrderText = 'วันที่ '+this.convertDateFormat(new Date(this.orders[0].getOrderDate()))
      
    })
    this.SearchByDateDialog.close()
    }
  }

  // getOrdersByBeetweenBtn(){
  //   this.getOrdersByBeetween(this.fromDate,this.toDate);
  // }

  getOrdersByCriteria(criteria:string){
    console.log(criteria)
    if(criteria=='date'){
      this.getOrdersByDate(this.orderByDatePickDate);
    }
    if(criteria=='between'){
      this.getOrdersByBeetween(this.fromDate,this.toDate);
    }
    if(criteria=='quater'){
      if(this.quater == null || this.yearOfQuater == null){
        alert('กรุณาเลือกปี และ ไตรมาส')
      }else{
        this.getOrderByQuater(this.quater,this.yearOfQuater);
        this.showDateOrderText ='ไตรมาสที่ '+this.quater+' ของปี '+this.yearOfQuater;
      }
    }
  }

  getOrdersByBeetween(startDate:NgbDate,endDate:NgbDate){
    let convertedStartDate = this.convertDateFormatByPickDate(startDate);
    let convertedEndtDate = this.convertDateFormatByPickDate(endDate);
    this.viewReportController.getOrderByBeetweenDate(new Date(convertedStartDate),new Date(convertedEndtDate)).then((res:Order[])=>{
      this.orders = res;
    })
    this.showDateOrderText = 'ระหว่างวันที่ '+this.convertDateFormat(new Date(convertedStartDate))+' ถึงวันที่ '+ this.convertDateFormat(new Date(convertedEndtDate))
    this.SearchByBeetweenDateDialog.close();
  }


  // getOrdersByThisDay(){
  //   this.viewReportController.getOrderByDate(new Date()).then((res:Order[])=>{
  //     this.orders = res;
  //   })
  // }

  // getOrderByQuaterBtn(){
  //   if(this.quater == null || this.yearOfQuater == null){
  //     alert('กรุณาเลือกปี และ ไตรมาส')
  //   }else{
  //     this.getOrderByQuater(this.quater,this.yearOfQuater);
  //     this.showDateOrderText ='ไตรมาสที่ '+this.quater+' ของปี '+this.yearOfQuater;
  //   }
  // }

  getOrderByQuater(quater:number,yearOfQuater:number){
    this.viewReportController.getOrderByQuater(quater,yearOfQuater).then((res:Order[])=>{
      this.orders = res;
      this.SearchByQuarterDialog.close()
    })
  }

  sumAllPrice():number{
    let sumPrice:number = 0;
    for(let order of this.orders){
      order.getOrderDetails().forEach(function(orderDetail){
        sumPrice += orderDetail.getProductSalePrice()*orderDetail.getProductAmount();
      })
    }
    return sumPrice
  }

  sumAllProfit():number{
    let sumProfit:number = 0;
    for(let order of this.orders){
      order.getOrderDetails().forEach(function(orderDetail){
        sumProfit += ((orderDetail.getProductSalePrice()*orderDetail.getProductAmount())-(orderDetail.getProductCaptialPrice()*orderDetail.getProductAmount()))
      })
    }
    return sumProfit
  }

  sumPriceOrder(order:Order):number{
    let sumPrice:number = 0;
      order.getOrderDetails().forEach(function(orderDetail){
        sumPrice += orderDetail.getProductSalePrice()*orderDetail.getProductAmount();
      })
    return sumPrice;
  }

  sumProfitOrder(order:Order):number{
    let sumProfit:number = 0;
      order.getOrderDetails().forEach(function(orderDetail){
        sumProfit += ((orderDetail.getProductSalePrice()*orderDetail.getProductAmount())-(orderDetail.getProductCaptialPrice()*orderDetail.getProductAmount()))
      })
    return sumProfit;
  }

  convertDateFormat(date:Date):string{
    return this.datePipe.transform(date,'yyyy-MM-dd');
  }

  gotoTop(){
    window.scroll(0,0);
  }

  ngOnInit() {
    
  } 

}
