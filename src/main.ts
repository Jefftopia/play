import { IOptions } from './app/core/interfaces';
import { CONFIG_TOKEN } from './app/core/constants';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { AppModule } from './app/module';

import './styles.scss';

const windowRef: AppWindow = window;
const configApi: string = windowRef.options.fetchUrl;

export function fetchLocal(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest
        xhr.onload = function () {
            resolve(new Response(xhr.responseText, { status: xhr.status }));
        }
        xhr.onerror = function () {
            reject(new TypeError('Local request failed'));
        }
        xhr.open('GET', url);
        xhr.send(null);
    })
}

export function parseOptions(options: IOptions): Promise<NgModuleRef<AppModule>> {
    return platformBrowserDynamic(
        [
            {
                provide: CONFIG_TOKEN,
                useValue: options
            }
        ]
    ).bootstrapModule(AppModule);
}

export function parseResponse(res: Response): Promise<NgModuleRef<AppModule>> {
    console.info('fetch response! ', res);

    return res.json().then(parseOptions);
}

if (process.env.ENV === 'production') {
    enableProdMode();
}

if ( (/electron/i).test(navigator.userAgent) ) {
    fetchLocal(configApi).then(parseResponse);
} else {
    fetch(configApi).then(parseResponse);
}

