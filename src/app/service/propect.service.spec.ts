import { TestBed } from '@angular/core/testing';

import { PropectService } from './propect.service';

describe('PropectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropectService = TestBed.get(PropectService);
    expect(service).toBeTruthy();
  });
});
