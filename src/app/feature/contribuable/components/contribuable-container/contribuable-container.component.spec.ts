import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuableContainerComponent } from './contribuable-container.component';

describe('ContribuableContainerComponent', () => {
  let component: ContribuableContainerComponent;
  let fixture: ComponentFixture<ContribuableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuableContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
