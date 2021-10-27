import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthContainerComponent} from './component/auth-container/auth-container.component';
import {UserContainerComponent} from './component/user-container/user-container.component';
import {AddUserContainerComponent} from './component/add-user-container/add-user-container.component';
import {LoginContainerComponent} from './component/login-container/login-container.component';
import {RouterModule} from '@angular/router';
import {AuthRoutes} from './auth.routes';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AuthContainerComponent, UserContainerComponent, AddUserContainerComponent, LoginContainerComponent],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(AuthRoutes), ReactiveFormsModule
  ]
})
export class AuthModule {
}
