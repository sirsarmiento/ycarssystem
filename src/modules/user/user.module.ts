/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbAlertConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';

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
        NgbModule,
    ],
    providers: [...userServices.services, ...userGuards.guards, NgbAlertConfig],
    declarations: [...userComponents.components],
    exports: [...userComponents.components],
    entryComponents: [
        UserDeleteComponent
    ]
})
export class UserModule {}
