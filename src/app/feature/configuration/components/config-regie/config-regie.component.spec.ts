import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigRegieComponent } from './config-regie.component';

describe('ConfigRegieComponent', () => {
  let component: ConfigRegieComponent;
  let fixture: ComponentFixture<ConfigRegieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigRegieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigRegieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
