import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
    selector: 'app-edit-customer',
    templateUrl: './edit-customer.component.html',
    styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
    customer: Customer;
    customerId: string;

    constructor(
        private customerService: CustomerService,
        private flashMessages: FlashMessagesService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.customer = {} as Customer;
        this.customerId = this._route.snapshot.params['id'];
        this.customerService
            .getCustomer(this.customerId)
            .subscribe((customer) => (this.customer = customer));
    }

    deleteCustomer(): void {
        if (confirm('¿Seguro que deseas eliminar este cliente?')) {
            this.customerService.deleteCustomer(this.customer);
            this._router.navigate(['/']);
        }
    }

    saveCustomer({ value, valid }: { value: Customer; valid: boolean }): void {
        if (!valid) {
            this.flashMessages.show(
                'Por favor llena los campos correctamente',
                {
                    cssClass: 'alert-danger',
                    timeout: 5000,
                }
            );
        } else {
            value.id = this.customerId;
            this.customerService.editCustomer(value);
            this._router.navigate(['/']);
        }
    }
}
