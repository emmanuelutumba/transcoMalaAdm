import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportContraventionComponent } from './report-contravention.component';

describe('ReportContraventionComponent', () => {
  let component: ReportContraventionComponent;
  let fixture: ComponentFixture<ReportContraventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportContraventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportContraventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
