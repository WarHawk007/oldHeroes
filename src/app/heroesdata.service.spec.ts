import { TestBed } from '@angular/core/testing';

import { HeroesdataService } from './heroesdata.service';

describe('HeroesdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroesdataService = TestBed.get(HeroesdataService);
    expect(service).toBeTruthy();
  });
});
