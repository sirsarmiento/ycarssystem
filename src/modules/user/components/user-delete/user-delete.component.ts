import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//rxjs
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { UserModel } from '../../models';
import { UserService } from '../../services';

import { ApiResponseDto } from '@modules/app-common/models';

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
  formErrorsMessages: string[] = [];
  private subscriptions: Subscription[] = [];

  get hasFormErrors(): boolean {
    return this.formErrorsMessages.length > 0
  };

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
    this.cleanErrorMessages();
    this.isProcessing = true;
    // const deleteSubscription = this.userService.delete(this.data.id)
    //   .pipe(
    //     finalize(() => {
    //       this.isProcessing = false;
    //     })
    //   )
    //   .subscribe(response => {
    //     if (response.isValid) {
    //       this.onClose('ok');
    //     } else {
    //       this.setErrorMessages(response);
    //     }
    //   });

    // this.subscriptions.push(deleteSubscription);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  cleanErrorMessages(): void {
    this.formErrorsMessages = [];
  }

  setErrorMessages(response: ApiResponseDto): void {
    const errorMessages = response.results.map(value => value.message);
    this.formErrorsMessages = errorMessages;
  }

  onCloseAlert(): void {
    this.cleanErrorMessages();
  }
}
