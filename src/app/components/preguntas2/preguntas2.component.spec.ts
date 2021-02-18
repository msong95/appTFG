import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preguntas2Component } from './preguntas2.component';

describe('Preguntas2Component', () => {
  let component: Preguntas2Component;
  let fixture: ComponentFixture<Preguntas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Preguntas2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Preguntas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
