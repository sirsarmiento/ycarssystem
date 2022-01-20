import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { ClienteModel } from '@modules/cliente/models';

@Injectable()
export class ClienteService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<ClienteModel[]>{
       return this.http.get<ClienteModel[]>(`${environment.apiUrl}/api/movimiento/personal/persona`);
    }

    add( formData: FormData ){
        return this.http.post(`${ environment.apiUrl }/api/movimiento/personal/persona/new`, formData );
    }

    edit( id: number, formData: FormData ){
        return this.http.put(`${ environment.apiUrl }/api/movimiento/personal/persona/${ id }/edit`, formData );
    }

    delete( id: number ){
        return this.http.delete(`${ environment.apiUrl }/api/movimiento/personal/persona/delete/${ id }`);
    }

    getClientById(id: number) {
        return this.http.get<ClienteModel[]>(`${environment.apiUrl}/api/movimiento/personal/persona/porid/${ id }`);
    }
}
