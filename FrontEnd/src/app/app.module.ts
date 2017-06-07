import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { TrendsComponent }      from './trends.component';
import { TrendService }         from './trend.service';
import { TrendDataComponent }   from './trend-chart.component';
import { LandingComponent }     from './landing.component';
import { ChartsModule }         from 'ng2-charts';

@NgModule({
  imports:[
     BrowserModule,
     FormsModule,
     AppRoutingModule,
     ChartsModule 
  ],
  declarations: [ 
    AppComponent,
    LandingComponent,
    TrendDataComponent,
    TrendsComponent
  ],
  providers: [
    TrendService
  ],
  bootstrap:[ 
    AppComponent
  ]
})
export class AppModule {

 }
