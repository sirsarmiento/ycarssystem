/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { EstadoModule } from '@modules/estado/estado.module';

/* Components */
import * as estadoComponents from '@modules/estado/components';

/* Guards */
import * as dashboardGuards from '@modules/estado/guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Estado - YCarsSystem',
            breadcrumbs: [
                {
                    text: 'Estado',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: estadoComponents.EstadoComponent,
    },
    {
        path: 'add',
        data: {
            title: 'Agregar Estado - YCarsSystem',
            breadcrumbs: [
                {
                    text: 'Estado',
                    link: '/estado',
                },
                {
                    text: 'Agregar',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: estadoComponents.EstadoAddEditComponent,
    },
    {
        path: 'edit/:id',
        data: {
            title: 'Actualizar estado - YCarsSystem',
            breadcrumbs: [
                {
                    text: 'estado',
                    link: '/estado',
                },
                {
                    text: 'Editar',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: estadoComponents.EstadoAddEditComponent,
    }
];

@NgModule({
    imports: [EstadoModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class EstadoRoutingModule {}
