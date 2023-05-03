import { Injectable } from '@angular/core';

import { ShortcutEventOutput } from 'ng-keyboard-shortcuts';

@Injectable({
  providedIn: 'root',
})
export class NgKeyboardShortcutsService {
  constructor() {}

  getHotkeysConfiguration() {
    return [
      {
        key: ['meta + a'],
        command: (output: ShortcutEventOutput) =>
          console.log('command + a', output),
      },
      {
        key: 'meta + a',
        preventDefault: true,
        command: (output: ShortcutEventOutput) =>
          console.log('control + a', output),
      },
      {
        key: 'meta + plus',
        preventDefault: true,
        command: (output: ShortcutEventOutput) =>
          console.log('control + plus key', output),
      },
    ];
  }
}
