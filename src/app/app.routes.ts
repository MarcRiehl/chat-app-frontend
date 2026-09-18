import { Routes } from '@angular/router';
import { Mainpage } from './layout/mainpage/mainpage';

export const routes: Routes = [
    {
        path: '',
        component: Mainpage,
        title: 'Mainpage',
    },
    {
        path: '**',
        redirectTo: '',
    }
];
