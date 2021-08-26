import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributingUnitComponent } from './contributing-unit.component';

describe('ContributingUnitComponent', () => {
  let component: ContributingUnitComponent;
  let fixture: ComponentFixture<ContributingUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributingUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributingUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
