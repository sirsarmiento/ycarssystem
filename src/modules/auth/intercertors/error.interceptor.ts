import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { AuthService } from './../services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError(err => {
                if (err.status === 401) {
                    // auto logout if 401 response returned from api
                    Swal.fire(
                        'Credenciales invalidas',
                        'Verifique el usuario y contraseña',
                        'error'
                    );
                    // this.authService.logout();
                    // location.reload();
                } else if (err.status === 404) {
                    Swal.fire('Oops...', 'Error 404', 'error');
                } else if (err.status === 500) {
                    Swal.fire('Oops...', 'Error 500', 'error');
                }

                const error = err.error.message || err.statusText;
                return throwError(error);
            })
        );
    }
}
