import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
    ) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
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
        // stop here if form is invalidmessage
        if (this.loginForm.invalid) {
            this.loading = false;
            return;
        }

        // this.authenticationService.login(this.f.username.value, this.f.password.value)
        // .pipe(first())
        // .subscribe(
        //     data => {
        //         this.router.navigate([this.returnUrl]);
        //         localStorage.setItem('user', this.f.username.value );
        //     },
        //     error => {
        //         this.error = error;
        //         this.loading = false;
        //         console.log(error);
        //     });
   
        this.router.navigate([this.returnUrl]);
    }
}
