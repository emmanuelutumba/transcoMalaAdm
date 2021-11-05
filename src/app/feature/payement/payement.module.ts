import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {PayementContainerComponent} from './components/payement-container/payement-container.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {PayementTaxeComponent} from './components/payement-taxe/payement-taxe.component';
import {PayementContraventionComponent} from './components/payement-contravention/payement-contravention.component';
import {PayementRoutes} from './payement.routes';


@NgModule({
  declarations: [PayementContainerComponent, PayementTaxeComponent, PayementContraventionComponent],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(PayementRoutes)
  ]
})
export class PayementModule {
}
