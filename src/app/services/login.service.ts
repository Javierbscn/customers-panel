import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private authService: AngularFireAuth) {}

    getAuth(): Observable<any> {
        return this.authService.authState.pipe(map((auth) => auth));
    }

    login(email: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.authService.signInWithEmailAndPassword(email, password).then(
                (data) => resolve(data),
                (error) => reject(error)
            );
        });
    }

    logout(): void {
        this.authService.signOut();
    }

    register(email: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.authService
                .createUserWithEmailAndPassword(email, password)
                .then(
                    (data) => resolve(data),
                    (error) => reject(error)
                );
        });
    }
}
