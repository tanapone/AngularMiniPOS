import { TestBed, inject } from '@angular/core/testing';

import { ListAllInvoiceControllerService } from './list-all-invoice-controller.service';

describe('ListAllInvoiceControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListAllInvoiceControllerService]
    });
  });

  it('should be created', inject([ListAllInvoiceControllerService], (service: ListAllInvoiceControllerService) => {
    expect(service).toBeTruthy();
  }));
});
