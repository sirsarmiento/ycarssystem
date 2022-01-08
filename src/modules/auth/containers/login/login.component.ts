import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    returnUrl?: string;
    submitted = false;
    loading = false;    
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService
    ) {
        this.loginForm = this.formBuilder.group({
            username: ['ssarmiento', Validators.required],
            password: ['Tucson*50*', Validators.required]
        });

    }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    }

    // convenience getter for easy accemessageelds
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.loading = true;
        this.submitted = true;
        
        if (this.loginForm.invalid) {
            this.loading = false;
            return;
        }

        this.authService.login(this.f.username.value, this.f.password.value);
    }
}
