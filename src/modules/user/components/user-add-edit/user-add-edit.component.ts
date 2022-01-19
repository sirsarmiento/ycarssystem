import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { UserModel } from '../../models';
import { UserService } from '../../services';


@Component({
    selector: 'sb-user-add-edit',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-add-edit.component.html',
    styleUrls: ['user-add-edit.component.scss'],
})
export class UserAddEditComponent implements OnInit {
  roles: any[] = [
    {
      "id": 1,
      "nombre": "ROLE_ADMINITRADOR",
      "status": "Vigente",
      "createdby": "ssarmiento"
    },
    {
      "id": 2,
      "nombre": "ROLE_USUARIO",
      "status": "Vigente",
      "createdby": "ssarmiento"
    }
  ];
  loading = false;
  public submitted = false;
  id!: number;
  isAddMode!: boolean;
  status!: string;

  public registerForm = this.fb.group({
    username: ['', Validators.required ],
    password: ['', Validators.required ],
    password2: ['', Validators.required ],
    roles: new FormArray([], Validators.required)
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.isAddMode = !this.id;
    }

    get f() { return this.registerForm.controls; }

    onSubmit(){
        this.submitted = true;

        if ( this.registerForm.invalid ) {
        return;
        }

        if (this.isAddMode) {
          console.log('add', this.registerForm.value);
          this.createUser();
        } else {
          console.log('update');
            //this.updateUser();
        }
    }
    
    createUser(){
      this.userService.add( this.f.username.value, this.f.password.value, JSON.stringify(this.f.roles.value))
        .subscribe( resp => {
            Swal.fire(
            'Usuario creado',
            'Usuario agregado con éxito',
            'success'
            );
            //Swal.fire('Usuario creado',`${ resp['msg'] }`,'success');
        }, (err) => { 
            console.log(err);
        
            Swal.fire('Error', `${ err }`, 'error' );
        });
    }
    
    updateUser(){
      if(this.f.estatus.value === false){ this.status = 'No Vigente'; }
      else{ this.status = 'Vigente'; }

      this.userService.edit(this.id, this.f.username.value, JSON.stringify(this.f.roles.value), this.status)
      .subscribe( resp => {
        Swal.fire(
          'Usuario modificado',
          'Usuario modificado con éxito',
          'success'
        );
      }, (err) => {
        Swal.fire('Error', err , 'error' );
      });
    }

    contrasenasNoValidas() {
      const pass1 = this.registerForm.get('password')!.value;
      const pass2 = this.registerForm.get('password2')!.value;
    
        if ( (pass1 !== pass2) && this.submitted ) {
          return true;
        } else {
          return false;
        }
    
      }
    
      passwordsIguales(pass1Name: string, pass2Name: string ) {
    
        return ( formGroup: FormGroup ) => {
          const pass1Control = formGroup.get(pass1Name);
          const pass2Control = formGroup.get(pass2Name);
    
          if ( pass1Control!.value === pass2Control!.value ) {
            pass2Control!.setErrors(null);
          } else {
            pass2Control!.setErrors({ noEsIgual: true });
          }
        }
      }
    
      onCheckChange(event: any) {
        const formArray: FormArray = this.registerForm.get('roles') as FormArray;
    
        if(event.target.checked){
          formArray.push(new FormControl(event.target.value));
        }//else{
        //   let i: number = 0;
        //   formArray.controls.forEach((ctrl: AbstractControl) => {
        //     if(ctrl.value == event.target.value) {
        //       formArray.removeAt(i);
        //       return;
        //     }
        //     i++;
        //   });
        //}
      }
}
