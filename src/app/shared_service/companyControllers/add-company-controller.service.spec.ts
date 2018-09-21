import { TestBed, inject } from '@angular/core/testing';

import { AddCompanyControllerService } from './add-company-controller.service';

describe('AddCompanyControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddCompanyControllerService]
    });
  });

  it('should be created', inject([AddCompanyControllerService], (service: AddCompanyControllerService) => {
    expect(service).toBeTruthy();
  }));
});
