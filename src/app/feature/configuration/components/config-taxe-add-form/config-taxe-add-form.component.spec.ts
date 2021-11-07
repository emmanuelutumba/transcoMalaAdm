import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTaxeAddFormComponent } from './config-taxe-add-form.component';

describe('ConfigTaxeAddFormComponent', () => {
  let component: ConfigTaxeAddFormComponent;
  let fixture: ComponentFixture<ConfigTaxeAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigTaxeAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigTaxeAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
