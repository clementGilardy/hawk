import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProgrammationComponent} from "./component/programmation.component";
import {VideosComponent} from "./component/videos.component";
import {AppComponent} from "./component/app.component";
import {StreamComponent} from "./component/stream.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component:StreamComponent
    },
    {
        path: 'programmation',
        component: ProgrammationComponent
    },
    {
        path: 'videos',
        component: VideosComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);