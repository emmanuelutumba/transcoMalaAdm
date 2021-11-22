import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthContainerComponent} from './components/auth-container/auth-container.component';
import {UserContainerComponent} from './components/user-container/user-container.component';
import {AddUserContainerComponent} from './components/add-user-container/add-user-container.component';
import {LoginContainerComponent} from './components/login-container/login-container.component';
import {RouterModule} from '@angular/router';
import {AuthRoutes} from './auth.routes';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { UserAddFormComponent } from './components/user-add-form/user-add-form.component';
import { UserEditFormComponent } from './components/user-edit-form/user-edit-form.component';
import { UserChangePasswordFormComponent } from './components/user-change-password-form/user-change-password-form.component';
import { UserResetPasswordFormComponent } from './components/user-reset-password-form/user-reset-password-form.component';


@NgModule({
  declarations: [AuthContainerComponent, UserContainerComponent, AddUserContainerComponent, LoginContainerComponent, UserProfilComponent, UserRoleComponent, UserAddFormComponent, UserEditFormComponent, UserChangePasswordFormComponent, UserResetPasswordFormComponent],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(AuthRoutes), ReactiveFormsModule
  ]
})
export class AuthModule {
}
