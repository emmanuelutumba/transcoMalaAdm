import {Routes} from '@angular/router';
import {PayementTaxeComponent} from './components/payement-taxe/payement-taxe.component';

export const PayementRoutes: Routes = [
  {
    path: '',
    component: PayementTaxeComponent
  }, {
    path: 'taxe',
    component: PayementTaxeComponent
  }, {
    path: 'contravention',
    component: PayementTaxeComponent
  }
];
