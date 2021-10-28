import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportInsuranceComponent } from './report-insurance.component';

describe('ReportInsuranceComponent', () => {
  let component: ReportInsuranceComponent;
  let fixture: ComponentFixture<ReportInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
