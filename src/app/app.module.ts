import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';
import { HotkeyModule } from 'angular2-hotkeys';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotkeysComponent } from './hotkeys/hotkeys.component';
import { NgKeyboardShortcutsComponent } from './ng-keyboard-shortcuts/ng-keyboard-shortcuts.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HotkeysComponent,
    NgKeyboardShortcutsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'hotkeys', component: HotkeysComponent },
      { path: 'shortcuts', component: NgKeyboardShortcutsComponent },
    ]),
    ReactiveFormsModule,
    HotkeyModule.forRoot(),
    KeyboardShortcutsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
