import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule, ClrFormsNextModule } from "@clr/angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FullCalendarModule } from "ng-fullcalendar";

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeaderComponent } from './header/header.component';
import { BrandingComponent } from './branding/branding.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HeaderComponent,
    BrandingComponent,
    RegistrationFormComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    ClrFormsNextModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
