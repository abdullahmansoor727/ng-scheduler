import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftResourceCtaComponent } from './shift-resource-cta.component';

describe('ShiftResourceCtaComponent', () => {
  let component: ShiftResourceCtaComponent;
  let fixture: ComponentFixture<ShiftResourceCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftResourceCtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftResourceCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
