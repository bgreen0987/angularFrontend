"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TrendDataComponent = (function () {
    function TrendDataComponent() {
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2009', '2010', '2011', '2012',
            '2013', '2014', '2015', '2016'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [13, 14, 21, 23, 33, 33, 37, 27], label: '# Of New Gyms' }
        ];
    }
    TrendDataComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    TrendDataComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return TrendDataComponent;
}());
TrendDataComponent = __decorate([
    core_1.Component({
        selector: 'trend-chartarea',
        template: "<div>\n  <div style=\"display: block;max-width:700px;max-height:500px\">\n    <canvas baseChart\n            [datasets]=\"barChartData\"\n            [labels]=\"barChartLabels\"\n            [options]=\"barChartOptions\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\"></canvas>\n  </div>\n</div>"
    })
], TrendDataComponent);
exports.TrendDataComponent = TrendDataComponent;
//# sourceMappingURL=trend-chart.component.js.map