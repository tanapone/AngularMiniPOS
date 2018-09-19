import { TestBed, inject } from '@angular/core/testing';

import { RemoveUserControllerService } from './remove-user-controller.service';

describe('RemoveUserControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoveUserControllerService]
    });
  });

  it('should be created', inject([RemoveUserControllerService], (service: RemoveUserControllerService) => {
    expect(service).toBeTruthy();
  }));
});
