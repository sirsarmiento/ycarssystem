import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { EstadoModel } from '@modules/estado/models';
import { EstadoService } from '@modules/estado/services';

import { EstadoDeleteComponent } from '@modules/estado/components/estado-delete/estado-delete.component';

@Component({
    selector: 'sb-estado',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './estado.component.html',
    styleUrls: ['estado.component.scss'],
})
export class EstadoComponent implements OnInit {
    dataSource = new MatTableDataSource<EstadoModel>();
    userDisplayedColumns: string[] = ['descripcion', 'status', 'actions'];

    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

    constructor(
        private userService: EstadoService,
        private dialog: MatDialog,
    ) {}

    ngOnInit() {
        this.refresh();
    }

    refresh(){
      this.userService.getAll().subscribe(res => {
         this.dataSource.data = res;
         console.log(res);
     });
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    onUpdate(id: number){

    }

    onDelele(id: number, description: string) {
      const dialogRef = this.dialog.open(EstadoDeleteComponent, {
        data: { id: id, description: description }
      }); 

      dialogRef.afterClosed().subscribe(result => {
        this.refresh();
      });
    }
}
