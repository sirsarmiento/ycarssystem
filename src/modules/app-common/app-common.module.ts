/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Third Party */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '@modules/icons/icons.module';

const thirdParty = [IconsModule, NgbModule];

/* Angular Material */
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

const angulaMaterial = [MatTableModule, MatIconModule, MatTooltipModule, MatPaginatorModule, MatDialogModule, MatSortModule, MatFormFieldModule, MatProgressSpinnerModule];

/* Containers */
import * as appCommonContainers from './containers';

/* Components */
import * as appCommonComponents from './components';

/* Guards */
import * as appCommonGuards from './guards';

/* Services */
import * as appCommonServices from './services';
import * as authServices from '@modules/auth/services';

@NgModule({
    imports: [CommonModule, RouterModule, ...thirdParty, ...angulaMaterial],
    providers: [...appCommonServices.services, ...authServices.services, ...appCommonGuards.guards],
    declarations: [...appCommonContainers.containers, ...appCommonComponents.components],
    exports: [...appCommonContainers.containers, ...appCommonComponents.components, ...thirdParty, ...angulaMaterial],
})
export class AppCommonModule {}
