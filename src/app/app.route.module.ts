import {RouterModule, Routes} from '@angular/router';
import {DemosComponent} from './demos.component';
import {NgModule} from '@angular/core';
import {SignInComponent} from './sign/sign-in.component';
import {SignUpComponent} from './sign/sign-up.component';
import {PageError404Component} from './404';

const routes: Routes = [
  {
    path: 'demos',
    component: DemosComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageError404Component
  }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})

export class AppRouteModule {

}
