import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { LandingComponent }     from './landing.component';
import { TrendsComponent }      from './trends.component';




const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch:'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'index', component: TrendsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}
