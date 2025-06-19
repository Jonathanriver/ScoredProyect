import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterProyectPage } from './register-proyect.page';

describe('RegisterProyectPage', () => {
  let component: RegisterProyectPage;
  let fixture: ComponentFixture<RegisterProyectPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProyectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
