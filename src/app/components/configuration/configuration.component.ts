import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.css'],
})
export class ConfigurationComponent implements OnInit {
    allowRegister: boolean;

    constructor() { }

    ngOnInit(): void {
        this.allowRegister = false;
    }

    save(): void {
        
    }
}
