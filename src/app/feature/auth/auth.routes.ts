import { Routes } from '@angular/router';
import { LoginContainerComponent } from './components/login-container/login-container.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    component: LoginContainerComponent,
  },
  {
    path: 'login',
    component: LoginContainerComponent,
  },
];
