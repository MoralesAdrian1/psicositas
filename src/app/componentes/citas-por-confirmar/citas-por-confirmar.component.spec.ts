import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasPorConfirmarComponent } from './citas-por-confirmar.component';

describe('CitasPorConfirmarComponent', () => {
  let component: CitasPorConfirmarComponent;
  let fixture: ComponentFixture<CitasPorConfirmarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasPorConfirmarComponent]
    });
    fixture = TestBed.createComponent(CitasPorConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
