import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BaseComponent } from './base/base';
import { CoreModule } from './core/module';
import { AppRouterModule } from './routes';

@NgModule({
    bootstrap: [ BaseComponent ],
    declarations: [ BaseComponent ],
    exports: [
        BaseComponent,
        AppRouterModule,
        CoreModule
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        AppRouterModule
    ]
})
export class AppModule {}
