import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//rxjs
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { ClienteModel } from '@modules/cliente/models';
import { ClienteService } from '@modules/cliente/services';

export interface DialogData {
  id: number;
  cedula: string;
}

@Component({
  selector: 'cliente-user-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.scss']
})
export class ClienteDeleteComponent implements OnInit, OnDestroy {
  username: string = '';
  isProcessing: boolean = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private userService: ClienteService,
    public dialogRef: MatDialogRef<ClienteDeleteComponent>,
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
