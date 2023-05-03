import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgKeyboardShortcutsComponent } from './ng-keyboard-shortcuts.component';

describe('NgKeyboardShortcutsComponent', () => {
  let component: NgKeyboardShortcutsComponent;
  let fixture: ComponentFixture<NgKeyboardShortcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgKeyboardShortcutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgKeyboardShortcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
