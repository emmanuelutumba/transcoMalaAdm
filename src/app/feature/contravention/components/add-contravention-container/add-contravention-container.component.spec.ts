import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContraventionContainerComponent } from './add-contravention-container.component';

describe('AddContraventionContainerComponent', () => {
  let component: AddContraventionContainerComponent;
  let fixture: ComponentFixture<AddContraventionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContraventionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContraventionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
