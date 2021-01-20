import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { VrijgifteComponent } from './vrijgifte.component';

describe('VrijgifteComponent', () => {
  let component: VrijgifteComponent;
  let fixture: ComponentFixture<VrijgifteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VrijgifteComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VrijgifteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
