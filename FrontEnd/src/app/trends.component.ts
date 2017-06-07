import { Component, OnInit } from '@angular/core';
import {Trend} from './trend';
import { TrendService } from './trend.service';

@Component({
  selector:'trends-app',
  template: `<trend-chartarea></trend-chartarea>
  `
})
export class TrendsComponent implements OnInit{
 trends: Trend[];

  constructor (private trendService: TrendService){}

  getTrends(): void {
    this.trendService.getTrends().then(trends => this.trends = trends);
  }

  ngOnInit(): void {
    this.getTrends();
  }

}

