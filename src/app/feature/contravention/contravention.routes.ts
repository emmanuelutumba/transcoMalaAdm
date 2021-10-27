import {Routes} from '@angular/router';
import {ContraventionContainerComponent} from './components/contravention-container/contravention-container.component';
import {AddContraventionContainerComponent} from './components/add-contravention-container/add-contravention-container.component';

export const ContraventionRoutes: Routes = [
  {
    path: 'contravention',
    component: ContraventionContainerComponent,
    children: [
      {
        path: 'add',
        component: AddContraventionContainerComponent
      }
    ]
  }
];
