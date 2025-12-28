import { Routes } from '@angular/router';


export const routes: Routes = [
    // {
        // path: 'home',
        // title: 'Cityfix - accueil',
        // loadComponent: ()=> import('./feature/home')
    // },





    {
        path: 'enter',
        title: 'Cityfix - Accueil ',
        loadComponent: ()=> import('./feature/enter/enter.component')
    },

    {
        path: '',
        redirectTo: 'enter', 
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'enter',
        pathMatch: 'full'
    }
];
