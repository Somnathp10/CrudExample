import { TestBed } from '@angular/core/testing';

import { TaskDataServices } from './task-data.service';

describe('TaskDataServicesService', () => {
  let service: TaskDataServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDataServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
