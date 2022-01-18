/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as userComponents from './components';

/* Containers */
import * as userContainers from './containers';

/* Guards */
import * as userGuards from './guards';

/* Services */
import * as userServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...userServices.services, ...userGuards.users],
    declarations: [...userContainers.containers, ...userComponents.components],
    exports: [...userContainers.containers, ...userComponents.components],
})
export class UserModule {}
