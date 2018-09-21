import { TestBed, inject } from '@angular/core/testing';

import { RemoveCompanyControllerService } from './remove-company-controller.service';

describe('RemoveCompanyControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoveCompanyControllerService]
    });
  });

  it('should be created', inject([RemoveCompanyControllerService], (service: RemoveCompanyControllerService) => {
    expect(service).toBeTruthy();
  }));
});
