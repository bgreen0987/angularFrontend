import { Injectable } from '@angular/core';

import { Trend } from './trend';
import { TRENDS } from './mock-trends';

@Injectable()
export class TrendService {
    getTrends(): Promise<Trend[]> {
        return Promise.resolve(TRENDS);
    }
}