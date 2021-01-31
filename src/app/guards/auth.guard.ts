import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private _router: Router, private fireAuth: AngularFireAuth) {}

    canActivate(): Observable<boolean> {
        return this.fireAuth.authState.pipe(
            map((auth) => {
                if (!auth) {
                    this._router.navigate(['/login']);
                    return false;
                } else {
                    return true;
                }
            })
        );
    }
}
