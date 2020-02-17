import { Component, OnInit } from '@angular/core';
import { PotoosService } from '../service/potoos.service';
import { Observable } from 'rxjs';
import { Potoo } from '../models/potoo.model';

@Component({
  selector: 'app-potoos-page',
  templateUrl: './potoos-page.component.html',
  styleUrls: ['./potoos-page.component.scss']
})
export class PotoosPageComponent implements OnInit {

  public potoos: Observable<Potoo[]>;

  constructor(private potoosService: PotoosService) { }

  ngOnInit() {
    this.potoos = this.potoosService.potoos;
  }

}
