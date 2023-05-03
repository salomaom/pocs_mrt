import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ShortcutInput, AllowIn } from 'ng-keyboard-shortcuts';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ng-keyboard-shortcuts',
  templateUrl: './ng-keyboard-shortcuts.component.html',
  styleUrls: ['./ng-keyboard-shortcuts.component.css'],
})
export class NgKeyboardShortcutsComponent implements AfterViewInit {
  shortcuts: ShortcutInput[] = [];
  hotkeysOne = [
    {
      key: 'meta + 1',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => this.name.nativeElement.focus(),
    },
    {
      key: 'meta + 2',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => this.email.nativeElement.focus(),
    },
    {
      key: 'meta + 3',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => this.password.nativeElement.focus(),
    },
    {
      key: 'meta + 4',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => this.passwordConfirmation.nativeElement.focus(),
    },
    {
      key: 'meta + 5',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => this.sendButton.nativeElement.click(),
    },
  ];
  hotkeysTwo = [
    {
      key: 'meta + 6',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => this.name.nativeElement.focus(),
    },
    {
      key: 'meta + 7',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => this.email.nativeElement.focus(),
    },
    {
      key: 'meta + 8',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => this.password.nativeElement.focus(),
    },
    {
      key: 'meta + 9',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => this.passwordConfirmation.nativeElement.focus(),
    },
    {
      key: 'meta + 0',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => this.sendButton.nativeElement.click(),
    },
  ];
  selectedHotkeys = this.hotkeysOne;
  @ViewChild('name') name: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;
  @ViewChild('passwordConfirmation') passwordConfirmation: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;

  constructor(private location: Location) {}

  ngAfterViewInit(): void {
    this.shortcuts.push(...this.selectedHotkeys);
  }

  swapHotkeys(): void {
    this.selectedHotkeys =
      this.selectedHotkeys[0].key === this.hotkeysOne[0].key
        ? this.hotkeysTwo
        : this.hotkeysOne;
    this.shortcuts = this.selectedHotkeys;
    console.log('MILIMILI', this.selectedHotkeys, this.shortcuts);
  }

  sendAnAlert(): void {
    alert('Formulário enviado.');
  }

  goBack(): void {
    this.location.back();
  }
}
