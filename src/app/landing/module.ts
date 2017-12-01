import { NgModule } from '@angular/core';
import { LandingRoutesModule } from './routes';
import { SharedModule } from '../shared/module';
import { LandingBase } from './base/base';
import { NavbarComponent } from './navbar/navbar';
import { FareComponent } from './fare/fare';

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Stepper } from './stepper/stepper';

@NgModule({
    declarations: [
        LandingBase,
        FareComponent,
        NavbarComponent,
        Stepper
    ],
    imports: [
        LandingRoutesModule,
        SharedModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class LandingModule {}
