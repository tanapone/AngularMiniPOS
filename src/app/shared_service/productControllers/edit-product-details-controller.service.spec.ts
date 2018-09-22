import { TestBed, inject } from '@angular/core/testing';

import { EditProductDetailsControllerService } from './edit-product-details-controller.service';

describe('EditProductDetailsControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditProductDetailsControllerService]
    });
  });

  it('should be created', inject([EditProductDetailsControllerService], (service: EditProductDetailsControllerService) => {
    expect(service).toBeTruthy();
  }));
});
