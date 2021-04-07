import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preguntas5Component } from './preguntas5.component';

describe('Preguntas5Component', () => {
  let component: Preguntas5Component;
  let fixture: ComponentFixture<Preguntas5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Preguntas5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Preguntas5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
