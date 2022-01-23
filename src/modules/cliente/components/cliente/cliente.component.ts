import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { ClienteModel } from '@modules/cliente/models';
import { ClienteService } from '@modules/cliente/services';

import { ClienteDeleteComponent } from '@modules/cliente/components/cliente-delete/cliente-delete.component';

@Component({
    selector: 'sb-cliente',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cliente.component.html',
    styleUrls: ['cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
    dataSource = new MatTableDataSource<ClienteModel>();
    userDisplayedColumns: string[] = ['cedula', 'nombres', 'apellidos','telefono', 'email', 'ciudad', 'estado', 'actions'];

    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

    constructor(
        private userService: ClienteService,
        private dialog: MatDialog,
    ) {}

    ngOnInit() {
        this.refresh();
    }

    refresh(){
      this.userService.getAll().subscribe(res => {
         this.dataSource.data = res;
     });
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    onUpdate(id: number){

    }

    onDelele(id: number, cedula: string) {
      const dialogRef = this.dialog.open(ClienteDeleteComponent, {
        data: { id: id, cedula: cedula }
      }); 

      dialogRef.afterClosed().subscribe(result => {
        this.refresh();
      });
    }
}
