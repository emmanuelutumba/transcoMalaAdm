import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigRegieEditFormComponent } from './config-regie-edit-form.component';

describe('ConfigRegieEditFormComponent', () => {
  let component: ConfigRegieEditFormComponent;
  let fixture: ComponentFixture<ConfigRegieEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigRegieEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigRegieEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
