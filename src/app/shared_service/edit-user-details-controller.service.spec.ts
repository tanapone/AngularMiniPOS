import { TestBed, inject } from '@angular/core/testing';

import { EditUserDetailsControllerService } from './edit-user-details-controller.service';

describe('EditUserDetailsControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditUserDetailsControllerService]
    });
  });

  it('should be created', inject([EditUserDetailsControllerService], (service: EditUserDetailsControllerService) => {
    expect(service).toBeTruthy();
  }));
});
