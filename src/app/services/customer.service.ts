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

    getCustomers(): Observable<Customer[]> {
        this.customers = this.customerCollection.snapshotChanges().pipe(
            map((actions) => {
                return actions.map((a) => {
                    const data = a.payload.doc.data() as Customer;
                    data.id = a.payload.doc.id;
                    return data;
                });
            })
        );
        return this.customers;
    }
}
