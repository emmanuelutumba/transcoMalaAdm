import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResetPasswordFormComponent } from './user-reset-password-form.component';

describe('UserResetPasswordFormComponent', () => {
  let component: UserResetPasswordFormComponent;
  let fixture: ComponentFixture<UserResetPasswordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserResetPasswordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResetPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
