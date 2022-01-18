import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '@modules/auth/services';
import { Router} from '@angular/router';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
    constructor(public userService: UserService, private router: Router,) {}
    
    ngOnInit() {}

    doLogout() {
        localStorage.removeItem('user');
        let removeToken = localStorage.removeItem('currentUser');
        if (removeToken == null) {
            this.router.navigate(['/auth/login']);
        }
    }
}
