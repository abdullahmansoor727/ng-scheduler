import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftSchedulerComponent } from './shift-scheduler.component';

describe('ShiftSchedulerComponent', () => {
  let component: ShiftSchedulerComponent;
  let fixture: ComponentFixture<ShiftSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftSchedulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
