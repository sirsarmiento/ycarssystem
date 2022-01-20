import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { EstadoModel } from '@modules/estado/models';

@Injectable()
export class EstadoService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<EstadoModel[]>{
       return this.http.get<EstadoModel[]>(`${environment.apiUrl}/api/mantenimiento/estados`);
    }

    add( formData: FormData ){
        return this.http.post(`${ environment.apiUrl }/api/mantenimiento/estados/new`, formData );
    }

    edit( id: number, formData: FormData ){
        return this.http.put(`${ environment.apiUrl }/api/mantenimiento/estados/${ id }/edit`, formData );
    }

    delete( id: number ){
        return this.http.delete(`${ environment.apiUrl }/api/mantenimiento/estados/delete/${ id }`);
    }

    getById(id: number) {
        return this.http.get<EstadoModel[]>(`${environment.apiUrl}/api/mantenimiento/estado/porid/${ id }`);
    }
}
