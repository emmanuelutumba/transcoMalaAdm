import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementContraventionComponent } from './payement-contravention.component';

describe('PayementContraventionComponent', () => {
  let component: PayementContraventionComponent;
  let fixture: ComponentFixture<PayementContraventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayementContraventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementContraventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
