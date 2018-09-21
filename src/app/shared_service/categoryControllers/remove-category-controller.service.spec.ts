import { TestBed, inject } from '@angular/core/testing';

import { RemoveCategoryControllerService } from './remove-category-controller.service';

describe('RemoveCategoryControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoveCategoryControllerService]
    });
  });

  it('should be created', inject([RemoveCategoryControllerService], (service: RemoveCategoryControllerService) => {
    expect(service).toBeTruthy();
  }));
});
