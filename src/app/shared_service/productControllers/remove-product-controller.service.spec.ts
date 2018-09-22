import { TestBed, inject } from '@angular/core/testing';

import { RemoveProductControllerService } from './remove-product-controller.service';

describe('RemoveProductControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoveProductControllerService]
    });
  });

  it('should be created', inject([RemoveProductControllerService], (service: RemoveProductControllerService) => {
    expect(service).toBeTruthy();
  }));
});
