import { TestBed } from '@angular/core/testing';

import { CommonGameComponentsService } from './common-game-components.service';

describe('CommonGameComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonGameComponentsService = TestBed.get(CommonGameComponentsService);
    expect(service).toBeTruthy();
  });
});
