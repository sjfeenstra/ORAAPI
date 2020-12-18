import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleLoggenComponent } from './controle-loggen.component';

describe('ControleLoggenComponent', () => {
  let component: ControleLoggenComponent;
  let fixture: ComponentFixture<ControleLoggenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControleLoggenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleLoggenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
