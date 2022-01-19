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

    delete(id: number){

    }
}
