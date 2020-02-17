import { NgModule } from '@angular/core';
import { PotoosModule } from './potoos/potoos.module';
import { PagesRoutingModule } from './pages-routing.module';

const pages = [
  PotoosModule
];

@NgModule({
  imports: [ pages, PagesRoutingModule ],
  exports: [ pages, PagesRoutingModule ]
})
export class PagesModule { }
