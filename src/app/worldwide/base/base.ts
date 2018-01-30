import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'worldwide-base',
    styleUrls: [ './base.scss' ],
    templateUrl: './base.html'
})
export class WorldwideBase {

    public mapData: {};

    constructor(activatedRoute: ActivatedRoute) {
        this.mapData = activatedRoute.snapshot.data.mapData;
    }
}
