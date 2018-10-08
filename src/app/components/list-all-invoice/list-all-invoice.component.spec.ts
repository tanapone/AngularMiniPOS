import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllInvoiceComponent } from './list-all-invoice.component';

describe('ListAllInvoiceComponent', () => {
  let component: ListAllInvoiceComponent;
  let fixture: ComponentFixture<ListAllInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
