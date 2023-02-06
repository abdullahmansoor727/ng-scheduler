import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleOutputComponent } from './schedule-output.component';

describe('ScheduleOutputComponent', () => {
  let component: ScheduleOutputComponent;
  let fixture: ComponentFixture<ScheduleOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
