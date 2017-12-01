import { Injectable } from '@angular/core';

function getWindow(): AppWindow {
    return window;
}

@Injectable()
export class WindowReference {
    get get(): AppWindow {
        return getWindow();
    }
}
