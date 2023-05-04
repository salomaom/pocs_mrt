import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

import { Hotkey, HotkeysService } from 'angular2-hotkeys';

@Component({
  selector: 'app-hotkeys',
  templateUrl: './hotkeys.component.html',
  styleUrls: ['./hotkeys.component.css'],
})
export class HotkeysComponent implements OnInit {
  mac = 'command+s';
  win = 'ctrl+s';
  isMac = navigator.platform.includes('Mac');
  saveCommand = this.isMac ? this.mac : this.win;
  saveCommandTitle = this.isMac ? '⌘+s' : this.win;
  sendCommandTitle = 'ctrl+d';
  form: FormGroup = this.fb.group({
    textValue: '',
  });
  currentHotkeys = 1;
  hotkeysOne = [
    new Hotkey(
      'ctrl+1', //  key combination
      (): boolean => {
        // callback function to execute after key combination
        this.save();
        return false; // prevent bubbling
      },
      ['INPUT', 'TEXTAREA', 'SELECT'], // allow shortcut execution in these html elements
      'save' // shortcut name
    ),
    new Hotkey(
      'ctrl+2', //  key combination
      (): boolean => {
        // callback function to execute after key combination
        this.save();
        return false; // prevent bubbling
      },
      ['INPUT', 'TEXTAREA', 'SELECT'], // allow shortcut execution in these html elements
      'send' // shortcut name
    ),
  ];

  hotkeysTwo = [
    new Hotkey(
      'ctrl+3', //  key combination
      (): boolean => {
        // callback function to execute after key combination
        this.send();
        return false; // prevent bubbling
      },
      ['INPUT', 'TEXTAREA', 'SELECT'], // allow shortcut execution in these html elements
      'save' // shortcut name
    ),
    new Hotkey(
      'ctrl+4', //  key combination
      (): boolean => {
        // callback function to execute after key combination
        this.send();
        return false; // prevent bubbling
      },
      ['INPUT', 'TEXTAREA', 'SELECT'], // allow shortcut execution in these html elements
      'send' // shortcut name
    ),
  ];

  constructor(
    private hotkeysService: HotkeysService,
    private fb: FormBuilder,
    private location: Location
  ) {
    this.hotkeysService.add(this.hotkeysOne);
  }

  ngOnInit(): void {
    this.configForm();
  }

  save() {
    alert('Formulário enviado');
  }

  send() {
    alert('Mensagem de erro');
  }

  private configForm() {
    this.form = this.fb.group({
      textValue: '',
    });
  }

  swapHotkeys() {
    if (this.currentHotkeys === 1) {
      this.hotkeysService.remove(this.hotkeysOne);
      this.hotkeysService.add(this.hotkeysTwo);
      this.currentHotkeys = 2;
    } else {
      this.hotkeysService.remove(this.hotkeysTwo);
      this.hotkeysService.add(this.hotkeysOne);
      this.currentHotkeys = 1;
    }
  }

  goBack(): void {
    this.location.back();
  }
}
