import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLowStockComponent } from './list-low-stock.component';

describe('ListLowStockComponent', () => {
  let component: ListLowStockComponent;
  let fixture: ComponentFixture<ListLowStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLowStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLowStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
