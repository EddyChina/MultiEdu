import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatLineModule,
  MatListModule,
  MatOptionModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatPseudoCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  NativeDateModule
} from '@angular/material';
import 'hammerjs';
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
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule, // 为子组件引入Material
    MatButtonModule,
    MatTableModule, MatSliderModule, MatDialogModule,
    MatGridListModule, MatProgressBarModule, MatOptionModule,
    MatAutocompleteModule,
    MatExpansionModule, MatStepperModule, MatTabsModule, MatLineModule,
    NativeDateModule, MatCardModule, MatPseudoCheckboxModule, MatSlideToggleModule,
    MatProgressSpinnerModule, MatIconModule, MatButtonToggleModule, MatListModule
  ],
  providers: [
    SignService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
