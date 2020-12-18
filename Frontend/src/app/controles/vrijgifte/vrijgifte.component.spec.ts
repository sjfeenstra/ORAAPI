import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrijgifteComponent } from './vrijgifte.component';

describe('VrijgifteComponent', () => {
  let component: VrijgifteComponent;
  let fixture: ComponentFixture<VrijgifteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VrijgifteComponent],
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
