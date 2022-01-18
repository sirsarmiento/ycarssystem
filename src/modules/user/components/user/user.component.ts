import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../services';
import { UserModel } from '../../models';
import { MatPaginator } from '@angular/material/paginator';

@Component({
    selector: 'sb-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user.component.html',
    styleUrls: ['user.component.scss'],
})
export class UserComponent implements OnInit {
    //@ViewChild(MatPaginator) paginator: MatPaginator;
    userDataSource = new MatTableDataSource<UserModel>();
    userDisplayedColumns: string[] = ['username', 'roles', 'status', 'actions'];

      
    constructor(private userService: UserService) {
        
    }
      ngOnInit() {
        this.userService.getAll().subscribe((res) => {
          this.userDataSource.data = res;
          console.log(res);
        });
    }

    ngAfterViewInit(): void {
        //this.userDataSource.paginator = this.paginator;
    }

    openDeleteConfirmation(id:string, username:string){
        console.log(id, username);
    }
}
