import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Injectable({
    providedIn: 'root',
})
export class ConfigurationGuard implements CanActivate {
    constructor(
        private _router: Router,
        private configurationService: ConfigurationService
    ) {}

    canActivate(): Observable<boolean> {
        return this.configurationService.getConfiguration().pipe(
            map((configuration) => {
                if (configuration.allowRegister) return true;
                else {
                    this._router.navigate(['/login']);
                    return false;
                }
            })
        );
    }
}
