import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { PotoosPageComponent } from './potoos/potoos-page/potoos-page.component';

const routes: Route[] = [
    { path: 'potoos', component: PotoosPageComponent, loadChildren: './potoos/potoos.module#PotoosModule' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class PagesRoutingModule { }
