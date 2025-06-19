import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailProyectPage } from './detail-proyect.page';

describe('DetailProyectPage', () => {
  let component: DetailProyectPage;
  let fixture: ComponentFixture<DetailProyectPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProyectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
