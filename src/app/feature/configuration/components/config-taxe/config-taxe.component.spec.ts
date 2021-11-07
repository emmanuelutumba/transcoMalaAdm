import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTaxeComponent } from './config-taxe.component';

describe('ConfigTaxeComponent', () => {
  let component: ConfigTaxeComponent;
  let fixture: ComponentFixture<ConfigTaxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigTaxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigTaxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
