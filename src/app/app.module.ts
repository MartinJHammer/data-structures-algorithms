import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


const basic = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule
];

const material = [
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: [
    ...basic,
    ...material
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
