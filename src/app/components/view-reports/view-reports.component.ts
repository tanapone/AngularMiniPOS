import { Component, OnInit } from '@angular/core';
import { ViewReportControllerService } from 'src/app/shared_service/ViewReportControllers/view-report-controller.service';
import { Order } from 'src/app/entity/order';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {

  private orders = new Array<Order>();
  constructor(private viewReportController:ViewReportControllerService,private datePipe:DatePipe) { }

  getOrderByThisDay(){
    this.viewReportController.getOrderByDate(new Date()).then((res:Order[])=>{
      this.orders = res;
    })
  }

  sumAllPrice():number{
    let sumPrice:number = 0;
    for(let order of this.orders){
      sumPrice += order.getSumPrice();
    }
    return sumPrice
  }

  sumAllProfit():number{
    let sumProfit:number = 0;
    for(let order of this.orders){
      sumProfit += order.getProfit();
    }
    return sumProfit
  }

  convertDateFormat(date:Date):string{
    return this.datePipe.transform(date,'yyyy-MM-dd');
  }

  gotoTop(){
    window.scroll(0,0);
  }

  ngOnInit() {
    this.getOrderByThisDay()
  } 

}
