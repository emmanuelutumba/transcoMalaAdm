import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTaxeDetailComponent } from './config-taxe-detail.component';

describe('ConfigTaxeDetailComponent', () => {
  let component: ConfigTaxeDetailComponent;
  let fixture: ComponentFixture<ConfigTaxeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigTaxeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigTaxeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
