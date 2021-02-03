import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    isLoggedIn: boolean;
    loggedInUser: string;
    showRegister: boolean;

    constructor(
        private _router: Router,
        private loginService: LoginService,
        private configurationService: ConfigurationService
    ) {}

    ngOnInit(): void {
        this.loginService.getAuth().subscribe((auth) => {
            if (auth) {
                this.isLoggedIn = true;
                this.loggedInUser = auth.email;
            } else {
                this.isLoggedIn = false;
            }
        });

        this.configurationService
            .getConfiguration()
            .subscribe((configuration) => {
                this.showRegister = configuration.allowRegister;
            });
    }

    logout() {
        this.loginService.logout();
        this.isLoggedIn = false;
        this._router.navigate(['/login']);
    }
}
