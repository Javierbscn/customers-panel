import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    isLoggedIn: boolean;
    loggedInUser: string;

    constructor(private _router: Router, private loginService: LoginService) {}

    ngOnInit(): void {
        this.loginService.getAuth().subscribe((auth) => {
            if (auth) {
                this.isLoggedIn = true;
                this.loggedInUser = auth.email;
            } else {
                this.isLoggedIn = false;
            }
        });
    }

    logout() {
        this.loginService.logout();
        this.isLoggedIn = false;
        this._router.navigate(['/login'])
    }
}
