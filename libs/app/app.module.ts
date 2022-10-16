import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';


export const basic = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule
];

export const material = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
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
