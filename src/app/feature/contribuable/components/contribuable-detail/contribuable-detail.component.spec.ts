import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuableDetailComponent } from './contribuable-detail.component';

describe('ContribuableDetailComponent', () => {
  let component: ContribuableDetailComponent;
  let fixture: ComponentFixture<ContribuableDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuableDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
