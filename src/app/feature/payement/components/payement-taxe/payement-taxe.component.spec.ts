import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementTaxeComponent } from './payement-taxe.component';

describe('PayementTaxeComponent', () => {
  let component: PayementTaxeComponent;
  let fixture: ComponentFixture<PayementTaxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayementTaxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementTaxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
