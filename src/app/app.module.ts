import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNumbersComponent } from './components/get-prime-numbers/get-prime-numbers.component';
import { PrimeNumbersService } from './prime-numbers.service';

@NgModule({
  declarations: [
    AppComponent,
    PrimeNumbersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PrimeNumbersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
