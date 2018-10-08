import { TestBed, inject } from '@angular/core/testing';

import { CreateInvoiceControllerService } from './create-invoice-controller.service';

describe('CreateInvoiceControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateInvoiceControllerService]
    });
  });

  it('should be created', inject([CreateInvoiceControllerService], (service: CreateInvoiceControllerService) => {
    expect(service).toBeTruthy();
  }));
});
