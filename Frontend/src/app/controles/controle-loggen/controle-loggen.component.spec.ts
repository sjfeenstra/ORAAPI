import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { ControleLoggenComponent } from './controle-loggen.component';

describe('ControleLoggenComponent', () => {
  let component: ControleLoggenComponent;
  let fixture: ComponentFixture<ControleLoggenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControleLoggenComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
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
