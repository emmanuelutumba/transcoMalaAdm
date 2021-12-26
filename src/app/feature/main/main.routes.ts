import { Routes } from '@angular/router';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

export const MainRoutes: Routes = [
  {
    path: 'main',
    component: MainContainerComponent,
    canActivate: [AuthGuard],
  },
];
