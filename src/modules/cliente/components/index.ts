import { ClienteComponent } from '@modules/cliente/components/cliente/cliente.component';
import { ClienteAddEditComponent } from '@modules/cliente/components/cliente-add-edit/cliente-add-edit.component';
import { ClienteDeleteComponent } from '@modules/cliente/components/cliente-delete/cliente-delete.component';

export const components = [
    ClienteComponent,
    ClienteAddEditComponent,
    ClienteDeleteComponent
];

export * from '@modules/cliente/components/cliente/cliente.component';
export * from '@modules/cliente/components/cliente-add-edit/cliente-add-edit.component';
export * from '@modules/cliente/components/cliente-delete/cliente-delete.component';

