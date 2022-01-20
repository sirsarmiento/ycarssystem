/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { UserModule } from '@modules/user/user.module';

/* Components */
import * as userComponents from '@modules/user/components';

/* Guards */
import * as dashboardGuards from '@modules/user/guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'User - YCarsSystem',
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
        path: 'add',
        data: {
            title: 'Agregar Usuario - YCarsSystem',
            breadcrumbs: [
                {
                    text: 'Usuario',
                    link: '/user',
                },
                {
                    text: 'Agregar',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: userComponents.UserAddEditComponent,
    },
    {
        path: 'edit/:id',
        data: {
            title: 'Actualizar Usuario - YCarsSystem',
            breadcrumbs: [
                {
                    text: 'Usuario',
                    link: '/user',
                },
                {
                    text: 'Editar',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: userComponents.UserAddEditComponent,
    }
];

@NgModule({
    imports: [UserModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
