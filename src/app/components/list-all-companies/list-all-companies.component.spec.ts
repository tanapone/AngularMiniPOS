import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllCompaniesComponent } from './list-all-companies.component';

describe('ListAllCompaniesComponent', () => {
  let component: ListAllCompaniesComponent;
  let fixture: ComponentFixture<ListAllCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
