import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContraventionContainerComponent} from './components/contravention-container/contravention-container.component';
import {AddContraventionContainerComponent} from './components/add-contravention-container/add-contravention-container.component';
import {RouterModule} from '@angular/router';
import {ContraventionRoutes} from './contravention.routes';


@NgModule({
  declarations: [ContraventionContainerComponent, AddContraventionContainerComponent],
  imports: [
    CommonModule, RouterModule.forChild(ContraventionRoutes)
  ]
})
export class ContraventionModule {
}
