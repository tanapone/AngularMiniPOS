import { TestBed, inject } from '@angular/core/testing';

import { WsTaskService } from './ws-task.service';

describe('WsTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WsTaskService]
    });
  });

  it('should be created', inject([WsTaskService], (service: WsTaskService) => {
    expect(service).toBeTruthy();
  }));
});
