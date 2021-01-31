import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
    email: string;
    password: string;
    confirmPassword: string;

    constructor(
        private flashMessages: FlashMessagesService,
        private loginService: LoginService,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.loginService.getAuth().subscribe((auth) => {
            if (auth) {
                this._router.navigate(['/']);
            }
        });
    }

    register(): void {
        if (this.password === this.confirmPassword) {
            this.loginService
                .register(this.email, this.password)
                .then((response) => {
                    this._router.navigate(['/']);
                })
                .catch((error) => {
                    this.flashMessages.show(error.message, {
                        cssClass: 'alert-danger',
                        timeout: 5000,
                    });
                });
        } else {
            this.flashMessages.show('Las contraseñas no coinciden', {
                cssClass: 'alert-danger',
                timeout: 5000,
            });
        }
    }
}
