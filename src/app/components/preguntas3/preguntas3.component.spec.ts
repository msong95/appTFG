import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preguntas3Component } from './preguntas3.component';

describe('Preguntas3Component', () => {
  let component: Preguntas3Component;
  let fixture: ComponentFixture<Preguntas3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Preguntas3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Preguntas3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
