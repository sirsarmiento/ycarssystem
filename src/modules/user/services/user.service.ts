import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    // getTest(){
    //   return this.http.get(`${environment.apiUrl}/stellar/notas/entregas/20211101/20211105`);
    // }
}
