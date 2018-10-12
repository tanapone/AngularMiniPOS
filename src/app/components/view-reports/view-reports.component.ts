import { Component, OnInit } from '@angular/core';
import { ViewReportControllerService } from 'src/app/shared_service/ViewReportControllers/view-report-controller.service';

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {

  constructor(private viewReportController:ViewReportControllerService) { }


  ngOnInit() {
    this.viewReportController.getInvoiceByDate(new Date('2018-10-01'));
  }

}
