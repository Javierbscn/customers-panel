import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;

    constructor(
        private flashMessages: FlashMessagesService,
        private loginService: LoginService,
        private _router: Router
    ) {}

    ngOnInit(): void {}

    login(): void {
        this.loginService
            .login(this.email, this.password)
            .then((response) => {
                this._router.navigate(['/']);
            })
            .catch((error) => {
                this.flashMessages.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 5000,
                });
            });
    }
}
