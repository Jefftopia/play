import { Type } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../interfaces';
import { zoneReducer } from './zone/zone.reducer';
import { ZonesEffects } from './zone/zone.api';
import { selectionReducer } from './selection/selection.reducer';

export const APP_EFFECTS: Type<Data>[] = [
    ZonesEffects
];

export const APP_REDUCERS: ActionReducerMap<IAppState> = {
    selection: selectionReducer,
    zones: zoneReducer
};

export const APP_DEFAULT_STATE: Data = {
    zones: [],
    selection: { data: {} }
};
