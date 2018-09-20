import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllCategoriesComponent } from './list-all-categories.component';

describe('ListAllCategoriesComponent', () => {
  let component: ListAllCategoriesComponent;
  let fixture: ComponentFixture<ListAllCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
