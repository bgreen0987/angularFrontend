"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var trend_service_1 = require("./trend.service");
var TrendsComponent = (function () {
    function TrendsComponent(trendService) {
        this.trendService = trendService;
    }
    TrendsComponent.prototype.getTrends = function () {
        var _this = this;
        this.trendService.getTrends().then(function (trends) { return _this.trends = trends; });
    };
    TrendsComponent.prototype.ngOnInit = function () {
        this.getTrends();
    };
    return TrendsComponent;
}());
TrendsComponent = __decorate([
    core_1.Component({
        selector: 'trends-app',
        template: "<trend-chartarea></trend-chartarea>\n  "
    }),
    __metadata("design:paramtypes", [trend_service_1.TrendService])
], TrendsComponent);
exports.TrendsComponent = TrendsComponent;
//# sourceMappingURL=trends.component.js.map