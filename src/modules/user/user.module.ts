/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as userComponents from '@modules/user/components';


/* Guards */
import * as userGuards from '@modules/user/guards';

/* Services */
import * as userServices from '@modules/user/services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...userServices.services, ...userGuards.guards],
    declarations: [...userComponents.components],
    exports: [...userComponents.components],
})
export class UserModule {}
