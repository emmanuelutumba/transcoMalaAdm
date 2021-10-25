import {Routes} from '@angular/router';
import {AuthContainerComponent} from './component/auth-container/auth-container.component';
import {LoginContainerComponent} from './component/login-container/login-container.component';
import {UserContainerComponent} from './component/user-container/user-container.component';
import {AddUserContainerComponent} from './component/add-user-container/add-user-container.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    component: AuthContainerComponent
  }, {
    path: 'login',
    component: LoginContainerComponent
  }, {
    path: 'user',
    component: UserContainerComponent,
    children: [
      {
        path: 'add',
        component: AddUserContainerComponent
      }
    ]
  }
];

