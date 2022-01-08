import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    currentUser = {};

    constructor(private http: HttpClient, public router: Router) {}

    // Sign-in
    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/api/login_check`, { username, password })
        .subscribe((res: any) => {
            localStorage.setItem('access_token', res.token)
            this.currentUser = res;
            this.router.navigate(['/dashboard']);
        })
    }

    // Error 
    handleError(error: HttpErrorResponse) {
        let msg = '';
        if (error.error instanceof ErrorEvent) {
        // client-side error
        msg = error.error.message;
        } else {
        // server-side error
        msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(msg);
    }
}
