import { TestBed, inject } from '@angular/core/testing';

import { EditCategoryDetailsControllerService } from './edit-category-details-controller.service';

describe('EditCategoryDetailsControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditCategoryDetailsControllerService]
    });
  });

  it('should be created', inject([EditCategoryDetailsControllerService], (service: EditCategoryDetailsControllerService) => {
    expect(service).toBeTruthy();
  }));
});
