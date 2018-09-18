import { TestBed, inject } from '@angular/core/testing';

import { LoginControllerService } from './login-controller.service';

describe('LoginControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginControllerService]
    });
  });

  it('should be created', inject([LoginControllerService], (service: LoginControllerService) => {
    expect(service).toBeTruthy();
  }));
});
