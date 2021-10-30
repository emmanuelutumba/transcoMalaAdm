import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuableFormComponent } from './contribuable-form.component';

describe('ContribuableFormComponent', () => {
  let component: ContribuableFormComponent;
  let fixture: ComponentFixture<ContribuableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuableFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
