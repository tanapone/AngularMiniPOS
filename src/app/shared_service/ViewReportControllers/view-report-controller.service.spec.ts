import { TestBed, inject } from '@angular/core/testing';

import { ViewReportControllerService } from './view-report-controller.service';

describe('ViewReportControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewReportControllerService]
    });
  });

  it('should be created', inject([ViewReportControllerService], (service: ViewReportControllerService) => {
    expect(service).toBeTruthy();
  }));
});
