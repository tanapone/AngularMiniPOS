import { TestBed, inject } from '@angular/core/testing';

import { AddUserContollerService } from './add-user-contoller.service';

describe('AddUserContollerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddUserContollerService]
    });
  });

  it('should be created', inject([AddUserContollerService], (service: AddUserContollerService) => {
    expect(service).toBeTruthy();
  }));
});
