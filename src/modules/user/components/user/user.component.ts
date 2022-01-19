import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { UserModel } from '../../models';
import { UserService } from '../../services';

import { DeleteUserComponent } from '../delete-user/delete-user.component';

const ELEMENT_DATA: UserModel[] = [
    {id: 1, username: 'Hydrogen', roles: 'ADMINISTRADOR', status: 'Vigente'},
    {id: 2, username: 'Helium', roles: 'ADMINISTRADOR', status: 'Vigente'},
    {id: 3, username: 'Lithium', roles: 'ADMINISTRADOR', status: 'Vigente'},
    {id: 4, username: 'Beryllium', roles: 'USER', status: 'Vigente' },
    {id: 5, username: 'Boron', roles: 'ADMINISTRADOR', status: 'Vigente'},
    {id: 6, username: 'Carbon', roles: 'USER', status: 'Vigente'},
    {id: 7, username: 'Nitrogen', roles: 'ADMINISTRADOR', status: 'Vigente'},
    {id: 8, username: 'Oxygen', roles: 'ADMINISTRADOR', status: 'Vigente'},
    {id: 9, username: 'Fluorine', roles: 'ADMINISTRADOR', status: 'Vigente'},
    {id: 10, username: 'Neon', roles: 'USER', status: 'Vigente'},
  ];

@Component({
    selector: 'sb-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user.component.html',
    styleUrls: ['user.component.scss'],
})
export class UserComponent implements OnInit {
    dataSource = new MatTableDataSource<UserModel>(ELEMENT_DATA);
    //dataSource = ELEMENT_DATA;
    userDisplayedColumns: string[] = ['username', 'roles', 'status', 'actions'];

    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

    constructor(
        private userService: UserService,
        private dialog: MatDialog,
    ) {}

    ngOnInit() {
        this.refresh();
    }

    refresh(){
        // this.userService.getAll().subscribe(res => {
        //     this.userDataSource.data = res;
        //     console.log(res);
        // });
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    onCreate(){

    }

    onDelele(id: number, username: string) {
      const dialogRef = this.dialog.open(DeleteUserComponent, {
        data: { id: id, username: username }
      }); 

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
            this.refresh();
        }
      });
    }
}
