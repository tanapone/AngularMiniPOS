import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/entity/company'
@Component({
  selector: 'app-list-all-companies',
  templateUrl: './list-all-companies.component.html',
  styleUrls: ['./list-all-companies.component.css']
})
export class ListAllCompaniesComponent implements OnInit {

  private companies = new Array<Company>();
  constructor() { }

  ngOnInit() {
  }

}
