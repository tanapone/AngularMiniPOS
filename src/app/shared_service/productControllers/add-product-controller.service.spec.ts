import { TestBed, inject } from '@angular/core/testing';

import { AddProductControllerService } from './add-product-controller.service';

describe('AddProductControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddProductControllerService]
    });
  });

  it('should be created', inject([AddProductControllerService], (service: AddProductControllerService) => {
    expect(service).toBeTruthy();
  }));
});
