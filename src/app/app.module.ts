import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';
import { HotkeyModule } from 'angular2-hotkeys';
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotkeysComponent } from './hotkeys/hotkeys.component';
import { NgKeyboardShortcutsComponent } from './ng-keyboard-shortcuts/ng-keyboard-shortcuts.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StringfyPipe } from './pipes/stringfy.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotkeysComponent,
    NgKeyboardShortcutsComponent,
    HomeComponent,
    StringfyPipe,
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
    GalleryModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
