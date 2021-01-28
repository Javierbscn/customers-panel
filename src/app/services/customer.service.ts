import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from './../models/customer.model';

@Injectable({
    providedIn: 'root',
})
export class CustomerService {
    customerCollection: AngularFirestoreCollection<Customer>;
    customerDoc: AngularFirestoreDocument<Customer>;
    customers: Observable<Customer[]>;
    customer: Observable<Customer>;

    constructor(private db: AngularFirestore) {
        this.customerCollection = this.db.collection('customers', (ref) =>
            ref.orderBy('name', 'asc')
        );
    }

    addCustomer(customer: Customer): void {
        this.customerCollection.add(customer);
    }

    deleteCustomer(customer: Customer): void {
        this.customerDoc = this.db.doc<Customer>(`customers/${customer.id}`);

        this.customerDoc.delete();
    }

    editCustomer(customer: Customer): void {
        this.customerDoc = this.db.doc<Customer>(`customers/${customer.id}`);

        this.customerDoc.update(customer);
    }

    getCustomer(id: string): Observable<Customer> {
        this.customerDoc = this.db.doc<Customer>(`customers/${id}`);
        this.customer = this.customerDoc.snapshotChanges().pipe(
            map(action => {
                if (action.payload.exists === false) return null;
                else {
                    const data = action.payload.data() as Customer;
                    data.id = action.payload.id;
                    return data;
                }
            })
        )
        return this.customer;
    }

    getCustomers(): Observable<Customer[]> {
        this.customers = this.customerCollection.snapshotChanges().pipe(
            map((actions) => {
                return actions.map((action) => {
                    const data = action.payload.doc.data() as Customer;
                    data.id = action.payload.doc.id;
                    return data;
                });
            })
        );
        return this.customers;
    }
}
