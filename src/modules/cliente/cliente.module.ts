/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbAlertConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClienteDeleteComponent } from '@modules/cliente/components/cliente-delete/cliente-delete.component';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as clienteComponents from '@modules/cliente/components';

/* Guards */
import * as clienteGuards from '@modules/cliente/guards';

/* Services */
import * as clienteServices from '@modules/cliente/services';

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
    providers: [...clienteServices.services, ...clienteGuards.guards, NgbAlertConfig],
    declarations: [...clienteComponents.components],
    exports: [...clienteComponents.components],
    entryComponents: [
        ClienteDeleteComponent
    ]
})
export class ClienteModule {}
