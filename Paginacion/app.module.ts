import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { PaginatePipe } from './pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMatPaginatorIntl } from './paginator-es';

@NgModule({
  declarations: [
    AppComponent,
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiService,
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginatorIntl
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
