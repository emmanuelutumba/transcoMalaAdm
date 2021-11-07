import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigRegieDetailComponent } from './config-regie-detail.component';

describe('ConfigRegieDetailComponent', () => {
  let component: ConfigRegieDetailComponent;
  let fixture: ComponentFixture<ConfigRegieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigRegieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigRegieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
