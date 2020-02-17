import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Potoo } from '../models/potoo.model';

@Injectable({
  providedIn: 'root'
})
export class PotoosService {

  readonly potoos: Observable<Potoo[]>;

  constructor(private storage: AngularFireStorage, private store: AngularFirestore) { }
}
