import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigContraventionEditFormComponent } from './config-contravention-edit-form.component';

describe('ConfigContraventionEditFormComponent', () => {
  let component: ConfigContraventionEditFormComponent;
  let fixture: ComponentFixture<ConfigContraventionEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigContraventionEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigContraventionEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
