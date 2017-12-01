import { IOptions } from './app/core/interfaces';
import { CONFIG_TOKEN } from './app/core/constants';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { AppModule } from './app/module';

import './styles.scss';

const windowRef: AppWindow = window;
const configApi: string = windowRef.options.fetchUrl;

if (process.env.ENV === 'production') {
    enableProdMode();
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
    return res.json().then(parseOptions);
}

fetch(configApi).then(parseResponse);
