import { TestBed, inject } from '@angular/core/testing';

import { EditCompanyDetailsControllerService } from './edit-company-details-controller.service';

describe('EditCompanyDetailsControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditCompanyDetailsControllerService]
    });
  });

  it('should be created', inject([EditCompanyDetailsControllerService], (service: EditCompanyDetailsControllerService) => {
    expect(service).toBeTruthy();
  }));
});
