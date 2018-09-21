import { TestBed, inject } from '@angular/core/testing';

import { ListAllCategoriesControllerService } from './list-all-categories-controller.service';

describe('ListAllCategoriesControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListAllCategoriesControllerService]
    });
  });

  it('should be created', inject([ListAllCategoriesControllerService], (service: ListAllCategoriesControllerService) => {
    expect(service).toBeTruthy();
  }));
});
