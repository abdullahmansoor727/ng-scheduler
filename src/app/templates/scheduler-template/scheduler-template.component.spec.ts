import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerTemplateComponent } from './scheduler-template.component';

describe('SchedulerTemplateComponent', () => {
  let component: SchedulerTemplateComponent;
  let fixture: ComponentFixture<SchedulerTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulerTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
