import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AcceptRequestComponent } from './accept-request/accept-request.component';
import { HolidayComponent } from './holiday/holiday.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HolidayRequestComponent } from './holiday-request/holiday-request.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'holiday', component: HolidayComponent },
  { path: 'request', component: HolidayRequestComponent },
  { path: 'accept', component: AcceptRequestComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AcceptRequestComponent,
    HolidayComponent,
    DashboardComponent,
    LoginComponent,
    HolidayRequestComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
