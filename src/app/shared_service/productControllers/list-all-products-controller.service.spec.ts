import { TestBed, inject } from '@angular/core/testing';

import { ListAllProductsControllerService } from './list-all-products-controller.service';

describe('ListAllProductsControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListAllProductsControllerService]
    });
  });

  it('should be created', inject([ListAllProductsControllerService], (service: ListAllProductsControllerService) => {
    expect(service).toBeTruthy();
  }));
});
