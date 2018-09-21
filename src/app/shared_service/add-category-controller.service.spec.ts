import { TestBed, inject } from '@angular/core/testing';

import { AddCategoryControllerService } from './add-category-controller.service';

describe('AddCategoryControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddCategoryControllerService]
    });
  });

  it('should be created', inject([AddCategoryControllerService], (service: AddCategoryControllerService) => {
    expect(service).toBeTruthy();
  }));
});
