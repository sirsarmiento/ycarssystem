import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//rxjs
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { UserModel } from '../../models';
import { UserService } from '../../services';

export interface DialogData {
  id: number;
  username: string;
}

@Component({
  selector: 'kt-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit, OnDestroy {
  username: string = '';
  isProcessing: boolean = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<UserDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.forEach(el => el.unsubscribe());
  }

  onDelete(): void {
    this.isProcessing = true;
    const deleteSubscription = this.userService.delete(this.data.id)
       .pipe(
         finalize(() => {
           this.isProcessing = false;
         })
       )
       .subscribe(resp => {
           this.onClose();
       });

     this.subscriptions.push(deleteSubscription);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
