import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { Configuration } from 'src/app/models/configuration.model';

@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.css'],
})
export class ConfigurationComponent implements OnInit {
    allowRegister: boolean;

    constructor(
        private _router: Router,
        private configurationService: ConfigurationService
    ) { }

    ngOnInit(): void {
        this.allowRegister = false;
        this.configurationService.getConfiguration().subscribe((configuration: Configuration) => {
            this.allowRegister = configuration.allowRegister;
        })
    }

    saveChanges(): void {
        let configuration = { allowRegister: this.allowRegister };

        this.configurationService.setConfiguration(configuration);

        this._router.navigate(['/']);
    }
}
