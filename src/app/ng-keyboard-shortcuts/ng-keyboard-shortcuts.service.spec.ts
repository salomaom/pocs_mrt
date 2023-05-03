import { TestBed } from '@angular/core/testing';

import { NgKeyboardShortcutsService } from './ng-keyboard-shortcuts.service';

describe('NgKeyboardShortcutsService', () => {
  let service: NgKeyboardShortcutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgKeyboardShortcutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
