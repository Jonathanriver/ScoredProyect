import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionScorePage } from './gestion-score.page';

describe('GestionScorePage', () => {
  let component: GestionScorePage;
  let fixture: ComponentFixture<GestionScorePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionScorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
