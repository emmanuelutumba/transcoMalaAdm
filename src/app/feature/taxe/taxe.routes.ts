import {Routes} from '@angular/router';
import {TaxeContainerComponent} from './components/taxe-container/taxe-container.component';
import {AddTaxeContainerComponent} from './components/add-taxe-container/add-taxe-container.component';

export const TaxeRoutes: Routes = [
  {
    path: 'taxe',
    component: TaxeContainerComponent,
    children: [
      {
        path: 'add',
        component: AddTaxeContainerComponent
      }
    ]
  }
];
