import { Injectable, NgModule } from '@angular/core';
import { Resolve, RouterModule, Routes } from '@angular/router';
import { WorldwideBase } from './base/base';
import { ApiService } from '../core/services/api';
import { Observable } from 'rxjs/Observable';
// import { Store } from '@ngrx/store';
// import { IAppState } from '../core/interfaces';

// import { Zone } from '../core/state/zone/zone.model';
// import * as ZoneActions from '../core/state/zone/zone.actions';

@Injectable()
export class MapResolve implements Resolve<{}> {
    public apiService: ApiService;

    constructor(apiService: ApiService) {
        Object.assign(this, { apiService });
    }

    public resolve(): Observable<{}> {
        return this.apiService.getMaps();
    }
}

const WORLDWIDE_ROUTES: Routes = [
    {
        component: WorldwideBase,
        path: '',
        resolve: {
            mapData: MapResolve
        }
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(WORLDWIDE_ROUTES)
    ],
    providers: [
        MapResolve
    ]
})
export class WorldwideRoutesModule {}
