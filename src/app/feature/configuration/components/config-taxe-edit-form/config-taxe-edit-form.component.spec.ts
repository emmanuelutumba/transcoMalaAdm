import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTaxeEditFormComponent } from './config-taxe-edit-form.component';

describe('ConfigTaxeEditFormComponent', () => {
  let component: ConfigTaxeEditFormComponent;
  let fixture: ComponentFixture<ConfigTaxeEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigTaxeEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigTaxeEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
