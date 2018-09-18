import { TestBed, inject } from '@angular/core/testing';

import { ListAllUserControllerService } from './list-all-user-controller.service';

describe('ListAllUserControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListAllUserControllerService]
    });
  });

  it('should be created', inject([ListAllUserControllerService], (service: ListAllUserControllerService) => {
    expect(service).toBeTruthy();
  }));
});
