import { TestBed } from '@angular/core/testing';

import { MoviecastService } from './moviecast.service';

describe('MoviecastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviecastService = TestBed.get(MoviecastService);
    expect(service).toBeTruthy();
  });
});
