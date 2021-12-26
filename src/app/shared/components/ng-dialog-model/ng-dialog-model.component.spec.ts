import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDialogModelComponent } from './ng-dialog-model.component';

describe('NgDialogModelComponent', () => {
  let component: NgDialogModelComponent;
  let fixture: ComponentFixture<NgDialogModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDialogModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDialogModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
