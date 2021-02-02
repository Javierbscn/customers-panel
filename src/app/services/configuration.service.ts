import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Configuration } from 'src/app/models/configuration.model';

@Injectable({
    providedIn: 'root',
})
export class ConfigurationService {
    configurationDoc: AngularFirestoreDocument<Configuration>;
    configuration: Observable<Configuration>;
    id: string;

    constructor(private db: AngularFirestore) {
        // unique id for the collection
        this.id = '1';
        this.configurationDoc = this.db.doc<Configuration>(`configuration/${this.id}`);
    }

    getConfiguration(): Observable<Configuration> {
        this.configuration = this.configurationDoc.valueChanges();

        return this.configuration;
    }

    setConfiguration(configuration: Configuration): void {
        this.configurationDoc.update(configuration);
    }
}
