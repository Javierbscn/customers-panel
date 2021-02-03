import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    showRegister: boolean;

    constructor(
        private _router: Router,
        private flashMessages: FlashMessagesService,
        private loginService: LoginService,
        private configurationService: ConfigurationService
    ) {}

    ngOnInit(): void {
        this.loginService.getAuth().subscribe((auth) => {
            if (auth) {
                this._router.navigate(['/']);
            }
        });

        this.configurationService
            .getConfiguration()
            .subscribe((configuration) => {
                this.showRegister = configuration.allowRegister;
            });
    }

    disableBtn(input: HTMLInputElement): void {
        input.toggleAttribute('disabled')
    }

    login(input: HTMLInputElement): void {
        this.disableBtn(input);

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
