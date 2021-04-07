import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preguntas4Component } from './preguntas4.component';

describe('Preguntas4Component', () => {
  let component: Preguntas4Component;
  let fixture: ComponentFixture<Preguntas4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Preguntas4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Preguntas4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
