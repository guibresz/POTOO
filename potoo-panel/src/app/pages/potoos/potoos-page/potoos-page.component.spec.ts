import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotoosPageComponent } from './potoos-page.component';

describe('PotoosPageComponent', () => {
  let component: PotoosPageComponent;
  let fixture: ComponentFixture<PotoosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotoosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotoosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
