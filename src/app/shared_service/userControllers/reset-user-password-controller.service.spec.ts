import { TestBed, inject } from '@angular/core/testing';

import { ResetUserPasswordControllerService } from './reset-user-password-controller.service';

describe('ResetUserPasswordControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetUserPasswordControllerService]
    });
  });

  it('should be created', inject([ResetUserPasswordControllerService], (service: ResetUserPasswordControllerService) => {
    expect(service).toBeTruthy();
  }));
});
