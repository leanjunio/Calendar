import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from "@angular/router";

import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { CalendarComponent } from "./calendar/calendar.component";


const routes: Routes = [
  { path: 'registration', component: RegistrationFormComponent},
  { path: 'calendar', component:  CalendarComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
