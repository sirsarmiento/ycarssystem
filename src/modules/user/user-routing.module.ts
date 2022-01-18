import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Components */
import * as userComponents from './components';
import { UserModule } from './user.module';

const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Usuarios - YCarsSystem',
            breadcrumbs: [
                {
                    text: 'Usuarios',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: userComponents.UserComponent,
    },
    {
        path: 'register',
        data: {
            title: 'Registrar Usuario - YCarsSystem',
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
        component: userComponents.RegisterComponent,
    },
];

@NgModule({
    imports: [UserModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
