import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

import {AppRouteModule} from './app.route.module';
/***
 * the followings are self-declarated components
 */
import {DemosComponent} from './demos.component';
import {SignInComponent} from './sign/sign-in.component';
import {SignUpComponent} from './sign/sign-up.component';
import {PageError404Component} from './404';
import {SignService} from './sign/sign.service';
import {DataService} from './data/data.service';
import {MaterialsModule} from './materials/materials.module';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    SignInComponent,
    SignUpComponent,
    PageError404Component,
  ],
  imports: [
    AppRouteModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsModule,
  ],
  providers: [
    SignService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
