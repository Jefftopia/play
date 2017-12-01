import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
    {
        loadChildren: './landing/module#LandingModule',
        path: '',
        data: {
            animation: ''
        }
    },
    {
        loadChildren: './worldwide/module#WorldwideModule',
        path: 'worldwide',
        data: {
            animation: 'worldwide'
        }
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(ROUTES)
    ]
})
export class AppRouterModule {
}
