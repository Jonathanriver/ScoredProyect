import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AprobedProyectPage } from './aprobed-proyect.page';

describe('AprobedProyectPage', () => {
  let component: AprobedProyectPage;
  let fixture: ComponentFixture<AprobedProyectPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobedProyectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
