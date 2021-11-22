import {Routes} from '@angular/router';
import {LoginContainerComponent} from './components/login-container/login-container.component';
import {UserContainerComponent} from './components/user-container/user-container.component';
import {AddUserContainerComponent} from './components/add-user-container/add-user-container.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    component: LoginContainerComponent
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

