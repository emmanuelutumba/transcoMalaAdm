import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigContraventionComponent } from './config-contravention.component';

describe('ConfigContraventionComponent', () => {
  let component: ConfigContraventionComponent;
  let fixture: ComponentFixture<ConfigContraventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigContraventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigContraventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
