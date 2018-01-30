import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import * as Service from './services/index';
import * as State from './state/index';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
        EffectsModule.forRoot(State.APP_EFFECTS),
        StoreModule.forRoot(State.APP_REDUCERS, { initialState: State.APP_DEFAULT_STATE })
    ],
    providers: [
        Service.ApiService,
        Service.WindowReference
    ]
})

export class CoreModule {}
