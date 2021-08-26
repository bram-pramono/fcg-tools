import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalUnitComponent } from './conditional-unit.component';

describe('ConditionalUnitComponent', () => {
  let component: ConditionalUnitComponent;
  let fixture: ComponentFixture<ConditionalUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
