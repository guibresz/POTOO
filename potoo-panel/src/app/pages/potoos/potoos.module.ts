import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PotoosPageComponent } from './potoos-page/potoos-page.component';
import { PotoosRoutingModule } from './potoos-routing.module';



@NgModule({
  declarations: [PotoosPageComponent],
  imports: [
    CommonModule,
    PotoosRoutingModule
  ],
  exports: [
    PotoosRoutingModule
  ]
})
export class PotoosModule { }
