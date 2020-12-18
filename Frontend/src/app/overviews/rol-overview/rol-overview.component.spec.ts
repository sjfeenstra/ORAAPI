import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolOverviewComponent } from './rol-overview.component';

describe('RolOverviewComponent', () => {
  let component: RolOverviewComponent;
  let fixture: ComponentFixture<RolOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RolOverviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
