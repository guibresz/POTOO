import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const modules = [
  MatCardModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: [ modules ],
  exports: [ modules ]
})
export class MaterialModule { }
