import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePreguntasComponent } from './home-preguntas.component';

describe('HomePreguntasComponent', () => {
  let component: HomePreguntasComponent;
  let fixture: ComponentFixture<HomePreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePreguntasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
