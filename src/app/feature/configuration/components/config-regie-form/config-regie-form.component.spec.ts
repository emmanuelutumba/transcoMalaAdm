import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigRegieFormComponent } from './config-regie-form.component';

describe('ConfigRegieFormComponent', () => {
  let component: ConfigRegieFormComponent;
  let fixture: ComponentFixture<ConfigRegieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigRegieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigRegieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
