import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollDetailsComponent } from './roll-details.component';

describe('RollDetailsComponent', () => {
  let component: RollDetailsComponent;
  let fixture: ComponentFixture<RollDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RollDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
