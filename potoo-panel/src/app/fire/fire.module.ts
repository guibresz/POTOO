import { NgModule } from '@angular/core';

import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const modules = [
  AngularFireStorageModule, AngularFirestoreModule
];

@NgModule({
  imports: [ modules ],
  exports: [ modules ]
})
export class FireModule { }
