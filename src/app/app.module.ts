import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { CartModule } from './cart/cart.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule, CartModule],
  providers: [ HttpClientModule, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
