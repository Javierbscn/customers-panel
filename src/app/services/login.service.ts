import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private authService: AngularFireAuth) {}

    login(email: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.authService.signInWithEmailAndPassword(email, password).then(
                (data) => resolve(data),
                (error) => reject(error)
            );
        });
    }
}
