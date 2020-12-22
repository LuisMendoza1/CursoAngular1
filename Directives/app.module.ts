import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiDirectivaDirective } from './directives/mi-directiva.directive';

@NgModule({
  declarations: [
    AppComponent,
    MiDirectivaDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
