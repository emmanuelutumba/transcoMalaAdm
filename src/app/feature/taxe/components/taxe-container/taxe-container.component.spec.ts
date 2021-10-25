import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxeContainerComponent } from './taxe-container.component';

describe('TaxeContainerComponent', () => {
  let component: TaxeContainerComponent;
  let fixture: ComponentFixture<TaxeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
