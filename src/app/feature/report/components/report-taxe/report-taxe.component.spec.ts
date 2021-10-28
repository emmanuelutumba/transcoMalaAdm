import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTaxeComponent } from './report-taxe.component';

describe('ReportTaxeComponent', () => {
  let component: ReportTaxeComponent;
  let fixture: ComponentFixture<ReportTaxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportTaxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTaxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
