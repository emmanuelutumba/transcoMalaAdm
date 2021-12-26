import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginContainerComponent} from './components/login-container/login-container.component';
import {RouterModule} from '@angular/router';
import {AuthRoutes} from './auth.routes';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [  LoginContainerComponent],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(AuthRoutes), ReactiveFormsModule
  ]
})
export class AuthModule {
}
