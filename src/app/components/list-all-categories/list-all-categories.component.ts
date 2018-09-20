import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entity/category'

@Component({
  selector: 'app-list-all-categories',
  templateUrl: './list-all-categories.component.html',
  styleUrls: ['./list-all-categories.component.css']
})
export class ListAllCategoriesComponent implements OnInit {

  private categories = new Array<Category>();
  constructor() { }

  ngOnInit() {
  }

}
