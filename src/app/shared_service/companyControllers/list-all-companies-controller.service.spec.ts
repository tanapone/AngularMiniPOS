import { TestBed, inject } from '@angular/core/testing';

import { ListAllCompaniesControllerService } from './list-all-companies-controller.service';

describe('ListAllCompaniesControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListAllCompaniesControllerService]
    });
  });

  it('should be created', inject([ListAllCompaniesControllerService], (service: ListAllCompaniesControllerService) => {
    expect(service).toBeTruthy();
  }));
});
