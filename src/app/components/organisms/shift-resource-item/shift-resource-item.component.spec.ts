import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftResourceItemComponent } from './shift-resource-item.component';

describe('ShiftResourceItemComponent', () => {
  let component: ShiftResourceItemComponent;
  let fixture: ComponentFixture<ShiftResourceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftResourceItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftResourceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
