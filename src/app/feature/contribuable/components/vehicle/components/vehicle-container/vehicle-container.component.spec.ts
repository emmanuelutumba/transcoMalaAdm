import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleContainerComponent } from './vehicle-container.component';

describe('VehicleContainerComponent', () => {
  let component: VehicleContainerComponent;
  let fixture: ComponentFixture<VehicleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
