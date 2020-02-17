import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PotoosPageComponent } from './potoos-page/potoos-page.component';
import { PotoosRoutingModule } from './potoos-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FireModule } from 'src/app/fire/fire.module';
import { PotoosService } from './service/potoos.service';


@NgModule({
  declarations: [PotoosPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FireModule,
    // PotoosRoutingModule
  ],
  exports: [
    PotoosRoutingModule,
    PotoosPageComponent
  ],
  providers: [ PotoosService ]
})
export class PotoosModule { }
