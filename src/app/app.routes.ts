import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';


export const routes: Routes = [
    {
        path: 'home',
        title: 'Cityfix - home',
        loadComponent: ()=> import('./feature/home/home.component'),
        canActivate: [authGuard]
    },
    {
        path:'map',
        title: 'Cityfix - Map',
        loadComponent: ()=> import('./shared/components/map/map.component'),
    },


    {
        path: 'enter',
        title: 'Cityfix - Accueil ',
        loadComponent: ()=> import('./feature/enter/enter.component')
    },

    {
        path: '',
        redirectTo: 'home', 
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
