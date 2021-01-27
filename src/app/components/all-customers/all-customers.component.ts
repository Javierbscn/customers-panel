import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
    selector: 'app-all-customers',
    templateUrl: './all-customers.component.html',
    styleUrls: ['./all-customers.component.css'],
})
export class AllCustomersComponent implements OnInit {
    customers: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit(): void {
        this.customerService
            .getCustomers()
            .subscribe((customers) => (this.customers = customers));
    }
}
