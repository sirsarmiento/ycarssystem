/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { UserModule } from './user.module';

/* Containers */
import * as userContainers from './containers';

/* Guards */
import * as userGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Dashboard - YCarsSystem',
            breadcrumbs: [
                {
                    text: 'User',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: userContainers.ShowComponent,
    },
    {
        path: 'register',
        data: {
            title: 'Dashboard Static - YCarsSystem',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/user',
                },
                {
                    text: 'Static',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: userContainers.RegisterComponent,
    },
    {
        path: 'update',
        data: {
            title: 'Dashboard Light - YCarsSystem',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/user',
                },
                {
                    text: 'Light',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: userContainers.UpdateComponent,
    },
];

@NgModule({
    imports: [UserModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
