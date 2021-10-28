import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementContainerComponent } from './payement-container.component';

describe('PayementContainerComponent', () => {
  let component: PayementContainerComponent;
  let fixture: ComponentFixture<PayementContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayementContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
