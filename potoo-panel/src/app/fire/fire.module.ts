import { NgModule } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

const modules = [
  AngularFireStorage,
  AngularFirestore
];

@NgModule({
  imports: [ modules ],
  exports: [ modules ]
})
export class FireModule { }
