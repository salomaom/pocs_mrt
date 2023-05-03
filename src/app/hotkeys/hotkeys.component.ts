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
  form: FormGroup = this.fb.group({
    textValue: '',
  });

  constructor(
    private hotkeysService: HotkeysService,
    private fb: FormBuilder,
    private location: Location
  ) {
    this.hotkeysService.add(
      new Hotkey(
        this.saveCommand, //  key combination
        (): boolean => {
          // callback function to execute after key combination
          this.save();
          return false; // prevent bubbling
        },
        ['INPUT', 'TEXTAREA', 'SELECT'], // allow shortcut execution in these html elements
        'save' // shortcut name
      )
    );
  }

  ngOnInit(): void {
    this.configForm();
  }

  save() {
    console.log(this.form.value['textValue']);
  }

  private configForm() {
    this.form = this.fb.group({
      textValue: '',
    });
  }

  goBack(): void {
    this.location.back();
  }
}
