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
                    text: 'Users',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: userComponents.UserComponent,
    },
];

@NgModule({
    imports: [UserModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
