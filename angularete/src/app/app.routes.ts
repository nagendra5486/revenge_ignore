import { Routes } from '@angular/router';
// import { Nag } from './nag/nag';

export const routes: Routes = [
// {path: 'nag', component: Nag}
{path: 'nag', loadComponent: () => import('./nag/nag').then(m => m.Nag)}
];
