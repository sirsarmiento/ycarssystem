import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { UserModel } from '../models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<UserModel[]>{
       return this.http.get<UserModel[]>(`${environment.apiUrl}/api/movimiento/personal/user`);
    }

    add( username: string, password: string, roles: string ){
        const formData = {
            username: username,
            password: password,
            roles: roles
        }
        return this.http.post(`${ environment.apiUrl }/api/movimiento/personal/user/new`, formData );
    }

    edit( id: number,username: string, roles: string, status: string ){
        const formData = {
            username: username,
            roles: roles,
            status: status
        }
        return this.http.put(`${ environment.apiUrl }/api/movimiento/personal/user/${ id }/edit`, formData );
    }

    editPassword(password: string ){
        const formData = {
            password: password,
        }
        return this.http.post(`${ environment.apiUrl }/api/movimiento/personal/user/changepassword`, formData );
    }


    delete( id: number ){
        return this.http.delete(`${ environment.apiUrl }/api/movimiento/personal/user/${ id }`);
    }
}
