import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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

    @ViewChild('customerForm') customerForm: NgForm;
    @ViewChild('btnClose') btnCloseForm: ElementRef;

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

    addCustomer({ value, valid }: { value: Customer; valid: boolean }): void {
        if (!valid) {
            this.flashMessages.show(
                'Por favor llena el formulario correctamente',
                {
                    cssClass: 'alert-danger',
                    timeout: 5000,
                }
            );
        } else {
            this.customerService.addCustomer(value);
            this.customerForm.resetForm();
            this.closeModal()
        }
    }

    getTotalBalance(): number {
        let totalBalance = 0;
        if (this.customers) {
            this.customers.forEach((customer: Customer) => {
                totalBalance += customer.balance;
            });
        }
        return totalBalance;
    }

    private closeModal(): void {
        this.btnCloseForm.nativeElement.click();
    }
}
