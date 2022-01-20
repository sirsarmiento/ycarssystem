/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbAlertConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EstadoDeleteComponent } from '@modules/estado/components/estado-delete/estado-delete.component';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as estadoComponents from '@modules/estado/components';

/* Guards */
import * as estadoGuards from '@modules/estado/guards';

/* Services */
import * as estadoServices from '@modules/estado/services';

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
    providers: [...estadoServices.services, ...estadoGuards.guards, NgbAlertConfig],
    declarations: [...estadoComponents.components],
    exports: [...estadoComponents.components],
    entryComponents: [
        EstadoDeleteComponent
    ]
})
export class EstadoModule {}
