import { TestBed } from '@angular/core/testing';

import { GithubjobsService } from './githubjobs.service';

describe('GithubjobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubjobsService = TestBed.get(GithubjobsService);
    expect(service).toBeTruthy();
  });
});
