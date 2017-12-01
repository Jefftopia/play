import { Zone } from './state/zone/zone.model';
import { Selection } from './state/selection/selection.model';

declare global {

    interface AppWindow extends Window {
        options?: IOptionsFetch;
    }
}

export interface IAppState {
    selection: Selection;
    zones: Zone[];
}

export interface IOptionsFetch {
    fetchUrl: string;
}

export interface IOptions {
    URL_DATA: string;
}
