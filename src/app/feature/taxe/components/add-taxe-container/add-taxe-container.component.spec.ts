import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaxeContainerComponent } from './add-taxe-container.component';

describe('AddTaxeContainerComponent', () => {
  let component: AddTaxeContainerComponent;
  let fixture: ComponentFixture<AddTaxeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaxeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaxeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
