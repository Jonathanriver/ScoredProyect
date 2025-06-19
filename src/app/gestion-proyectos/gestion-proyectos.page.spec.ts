import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionProyectosPage } from './gestion-proyectos.page';

describe('GestionProyectosPage', () => {
  let component: GestionProyectosPage;
  let fixture: ComponentFixture<GestionProyectosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProyectosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
