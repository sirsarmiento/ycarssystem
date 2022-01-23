import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup, AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { EstadoModel } from '@modules/estado/models';
import { EstadoService } from '@modules/estado/services';


@Component({
    selector: 'sb-estado-add-edit',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './estado-add-edit.component.html',
    styleUrls: ['estado-add-edit.component.scss'],
})
export class EstadoAddEditComponent implements OnInit {
 
  loading = false;
  public submitted = false;
  id!: number;
  isAddMode!: boolean;
  status!: string;

  public registerForm = this.fb.group({
    descripcion: ['', Validators.required ],
  });

    constructor(
        private fb: FormBuilder,
        private estadoService: EstadoService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.isAddMode = !this.id;

      if (this.id) {
        this.estadoService.getById(this.id).subscribe(res => {
          this.registerForm.controls.descripcion.setValue(res[0].descripcion);
        });
      }
    }

    get f() { return this.registerForm.controls; }

    onSubmit(){
        this.submitted = true;
        if ( this.registerForm.invalid ) {
          return;
        }
        this.loading = true;
        if (this.isAddMode) {
          this.create();
        } else {
          this.update();
        }
    }
    
    create(){
      this.estadoService.add(this.registerForm.value)
        .subscribe( resp => {
            Swal.fire(
            'Cliente creado',
            'Operación realizada con éxito',
            'success'
            );
            this.location.back();
            //Swal.fire('Usuario creado',`${ resp['msg'] }`,'success');
        }, (err) => { 
            console.log(err);
        
            Swal.fire('Error', `${ err }`, 'error' );
        });
    }
    
    update(){
      this.estadoService.edit(this.id, this.registerForm.value)
      .subscribe( resp => {
        Swal.fire(
          'Cliente modificado',
          'Operación realizada con éxito',
          'success'
        );
        this.location.back();
      }, (err) => {
        Swal.fire('Error', err , 'error' );
      });
    }
}
