import { TestBed, inject } from '@angular/core/testing';

import { ListLowStockControllerService } from './list-low-stock-controller.service';

describe('ListLowStockControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListLowStockControllerService]
    });
  });

  it('should be created', inject([ListLowStockControllerService], (service: ListLowStockControllerService) => {
    expect(service).toBeTruthy();
  }));
});
