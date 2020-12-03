import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolDataComponent } from './rol-data.component';

describe('RolDataComponent', () => {
  let component: RolDataComponent;
  let fixture: ComponentFixture<RolDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
