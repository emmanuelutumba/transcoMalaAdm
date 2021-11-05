import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeFormEditComponent } from './vehicule-form-edit.component';

describe('VehiculeFormAddComponent', () => {
  let component: VehiculeFormEditComponent;
  let fixture: ComponentFixture<VehiculeFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculeFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
