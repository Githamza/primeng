import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule, ToolbarModule, SidebarModule, RadioButtonModule, CarouselModule } from 'primeng/primeng';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExposureComponent } from './exposure/exposure.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ExposureComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    RadioButtonModule,
    FormsModule,
    ToolbarModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
