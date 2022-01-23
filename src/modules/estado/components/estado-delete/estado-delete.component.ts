import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//rxjs
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { EstadoModel } from '@modules/estado/models';
import { EstadoService } from '@modules/estado/services';

export interface DialogData {
  id: number;
  cedula: string;
}

@Component({
  selector: 'estado-delete',
  templateUrl: './estado-delete.component.html',
  styleUrls: ['./estado-delete.component.scss']
})
export class EstadoDeleteComponent implements OnInit, OnDestroy {
  username: string = '';
  isProcessing: boolean = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private userService: EstadoService,
    public dialogRef: MatDialogRef<EstadoDeleteComponent>,
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
