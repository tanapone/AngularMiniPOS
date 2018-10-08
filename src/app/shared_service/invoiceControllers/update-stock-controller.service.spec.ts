import { TestBed, inject } from '@angular/core/testing';

import { UpdateStockControllerService } from './update-stock-controller.service';

describe('UpdateStockControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateStockControllerService]
    });
  });

  it('should be created', inject([UpdateStockControllerService], (service: UpdateStockControllerService) => {
    expect(service).toBeTruthy();
  }));
});
