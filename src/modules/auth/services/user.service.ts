import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { User } from '../models';

const userSubject: ReplaySubject<User> = new ReplaySubject(1);

@Injectable()
export class UserService {
    userName: any;
    constructor() {
        this.userName = localStorage.getItem('user');
        this.user = {
            id: '123',
            firstName: 'ValornoenviadodesdeBackend',
            lastName: 'ValornoenviadodesdeBackend',
            username: this.userName,
        };
    }

    set user(user: User) {
        userSubject.next(user);
    }

    get user$(): Observable<User> {
        return userSubject.asObservable();
    }
}
