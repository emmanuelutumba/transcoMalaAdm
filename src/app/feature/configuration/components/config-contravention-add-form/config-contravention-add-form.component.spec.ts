import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigContraventionAddFormComponent } from './config-contravention-add-form.component';

describe('ConfigContraventionAddFormComponent', () => {
  let component: ConfigContraventionAddFormComponent;
  let fixture: ComponentFixture<ConfigContraventionAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigContraventionAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigContraventionAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
