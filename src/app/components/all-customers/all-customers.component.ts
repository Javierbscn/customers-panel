import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'flash-messages-angular';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
    selector: 'app-all-customers',
    templateUrl: './all-customers.component.html',
    styleUrls: ['./all-customers.component.css'],
})
export class AllCustomersComponent implements OnInit {
    customers: Customer[];
    customer: Customer;

    constructor(
        private customerService: CustomerService,
        private flashMessages: FlashMessagesService
    ) {}

    ngOnInit(): void {
        this.customerService
            .getCustomers()
            .subscribe((customers) => (this.customers = customers));

        this.customer = {} as Customer;
    }

    getTotalBalance(): number {
        let totalBalance = 0;
        if (this.customers) {
            this.customers.forEach((customer: Customer) => {
                totalBalance += customer.balance;
            })
        }
        return totalBalance;
    }

    
}
