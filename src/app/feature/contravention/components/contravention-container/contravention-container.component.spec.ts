import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraventionContainerComponent } from './contravention-container.component';

describe('ContraventionContainerComponent', () => {
  let component: ContraventionContainerComponent;
  let fixture: ComponentFixture<ContraventionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContraventionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraventionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
