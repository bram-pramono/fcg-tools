import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcgTemplateComponent } from './fcg-template.component';

describe('FcgTemplateComponent', () => {
  let component: FcgTemplateComponent;
  let fixture: ComponentFixture<FcgTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcgTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FcgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
