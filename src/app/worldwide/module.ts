import { NgModule } from '@angular/core';
import { WorldwideRoutesModule } from './routes';
import { SharedModule } from '../shared/module';
import { WorldwideBase } from './base/base';
import { MapComponent } from './map/map';

@NgModule({
    declarations: [
        WorldwideBase,
        MapComponent
    ],
    imports: [
        WorldwideRoutesModule,
        SharedModule
    ]
})
export class WorldwideModule {}
