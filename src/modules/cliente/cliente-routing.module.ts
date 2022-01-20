/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { ClienteModule } from '@modules/cliente/cliente.module';

/* Components */
import * as clienteComponents from '@modules/cliente/components';

/* Guards */
import * as dashboardGuards from '@modules/cliente/guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Cliente - YCarsSystem',
            breadcrumbs: [
                {
                    text: 'Cliente',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: clienteComponents.ClienteComponent,
    },
    {
        path: 'add',
        data: {
            title: 'Agregar cliente - YCarsSystem',
            breadcrumbs: [
                {
                    text: 'cliente',
                    link: '/cliente',
                },
                {
                    text: 'Agregar',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: clienteComponents.ClienteAddEditComponent,
    },
    {
        path: 'edit/:id',
        data: {
            title: 'Actualizar cliente - YCarsSystem',
            breadcrumbs: [
                {
                    text: 'cliente',
                    link: '/cliente',
                },
                {
                    text: 'Editar',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: clienteComponents.ClienteAddEditComponent,
    }
];

@NgModule({
    imports: [ClienteModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ClienteRoutingModule {}
