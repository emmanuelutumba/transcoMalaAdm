import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuableEditFormComponent } from './contribuable-edit-form.component';

describe('ContribuableEditFormComponent', () => {
  let component: ContribuableEditFormComponent;
  let fixture: ComponentFixture<ContribuableEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuableEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuableEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
