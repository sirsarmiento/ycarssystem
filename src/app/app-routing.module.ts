import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/auth/login',
    },
    {
        path: 'cliente',
        loadChildren: () =>
            import('@modules/cliente/cliente-routing.module').then(m => m.ClienteRoutingModule),
    },
    {
        path: 'user',
        loadChildren: () =>
            import('@modules/user/user-routing.module').then(m => m.UserRoutingModule),
    },
    {
        path: 'state',
        loadChildren: () =>
            import('@modules/estado/estado-routing.module').then(m => m.EstadoRoutingModule),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('@modules/dashboard/dashboard-routing.module').then(
                m => m.DashboardRoutingModule
            ),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('@modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('@modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: 'version',
        loadChildren: () =>
            import('@modules/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('@modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
