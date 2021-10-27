import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOComponent } from './item-o.component';

describe('ItemOComponent', () => {
  let component: ItemOComponent;
  let fixture: ComponentFixture<ItemOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
