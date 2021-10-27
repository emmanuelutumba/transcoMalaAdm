import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaxeContainerComponent} from './components/taxe-container/taxe-container.component';
import {AddTaxeContainerComponent} from './components/add-taxe-container/add-taxe-container.component';
import {RouterModule} from '@angular/router';
import {TaxeRoutes} from './taxe.routes';


@NgModule({
  declarations: [TaxeContainerComponent, AddTaxeContainerComponent],
  imports: [
    CommonModule, RouterModule.forChild(TaxeRoutes)
  ]
})
export class TaxeModule {
}
