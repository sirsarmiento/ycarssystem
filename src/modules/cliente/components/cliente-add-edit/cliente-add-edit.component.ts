import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup, AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { ClienteModel } from '../../models';
import { ClienteService } from '../../services';


@Component({
    selector: 'sb-cliente-add-edit',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cliente-add-edit.component.html',
    styleUrls: ['cliente-add-edit.component.scss'],
})
export class ClienteAddEditComponent implements OnInit {
  estados: any[] = [
    {
      "id": 1,
      "descripcion": "Distrito Capital"
    },
    {
      "id": 2,
      "descripcion": "Miranda"
    }
  ];

  ciudades: any[] = [
    {
      "id": 1,
      "descripcion": "Caracas"
    },
    {
      "id": 2,
      "descripcion": "Guarenas"
    },
    {
      "id": 3,
      "descripcion": "Guatire"
    }
  ];
  loading = false;
  public submitted = false;
  id!: number;
  isAddMode!: boolean;
  status!: string;

  public registerForm = this.fb.group({
    cedula: ['13044519', Validators.required ],
    nombres: ['', Validators.required ],
    apellidos: ['', Validators.required ],
    direccion: ['', Validators.required ],
    telefono: ['', Validators.required ],
    email: ['', Validators.required ],
    ciudad: ['', Validators.required],
    estado: ['', Validators.required],
  });

    constructor(
        private fb: FormBuilder,
        private clienteService: ClienteService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.isAddMode = !this.id;

      if (this.id) {
        this.clienteService.getClientById(this.id).subscribe(res => {
          console.log(res[0]);
          this.registerForm.controls.cedula.setValue(res[0].cedula);
          this.registerForm.controls.nombres.setValue(res[0].nombres);
          this.registerForm.controls.apellidos.setValue(res[0].apellidos);
          this.registerForm.controls.email.setValue(res[0].email);
          this.registerForm.controls.direccion.setValue(res[0].direccion);
          this.registerForm.controls.telefono.setValue(res[0].telefono);

          let estado = new Number(res[0].codigociudad).valueOf();
          let ciudad = new Number(res[0].codigoestado).valueOf();
        
          this.registerForm.controls.ciudad.setValue(ciudad);
          this.registerForm.controls.estado.setValue(estado);
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
      this.clienteService.add(this.registerForm.value)
        .subscribe( (resp: any) => {
            Swal.fire(
            'Cliente creado',
            `${ resp['msg'] }`,
            'success'
            );
            this.location.back();
        }, (err) => {
          this.location.back();
        });
    }
    
    update(){
      this.clienteService.edit(this.id, this.registerForm.value)
      .subscribe( (resp: any) => {
        Swal.fire(
          'Cliente modificado',
          `${ resp['msg'] }`,
          'success'
        );
        this.location.back();
      }, (err) => {
        console.log(err);
        this.loading = false;
      });
    }

    getCiudad($event: any){
      console.log($event);
    }
}
