import { TestBed } from '@angular/core/testing';

import { CommanderService } from './commander.service';

describe('CommanderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommanderService = TestBed.get(CommanderService);
    expect(service).toBeTruthy();
  });
});
