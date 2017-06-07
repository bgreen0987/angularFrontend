import { Component } from '@angular/core';
import { Trend } from './trend';
import { TRENDS } from './mock-trends';

@Component({
    selector: 'trend-chartarea',
    template:`<div>
  <div style="display: block;max-width:700px;max-height:500px">
    <canvas baseChart
            [datasets]="barChartData"
            [labels]="barChartLabels"
            [options]="barChartOptions"
            [legend]="barChartLegend"
            [chartType]="barChartType"
            (chartHover)="chartHovered($event)"
            (chartClick)="chartClicked($event)"></canvas>
  </div>
</div>`
})

export class TrendDataComponent {
    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels:string[] = ['2009', '2010', '2011', '2012', 
    '2013','2014','2015','2016']

    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartData:any[] = [
        {data: [13,14,21,23,33,33,37,27], label:'# Of New Gyms'}
    ]
      public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
}
