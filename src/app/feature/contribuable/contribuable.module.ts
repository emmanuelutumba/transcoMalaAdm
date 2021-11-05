import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContribuableContainerComponent} from './components/contribuable-container/contribuable-container.component';
import {ContribuableFormComponent} from './components/contribuable-form/contribuable-form.component';
import {ContribuableDetailComponent} from './components/contribuable-detail/contribuable-detail.component';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {VehicleModule} from './components/vehicle/vehicle.module';
import {RouterModule} from '@angular/router';
import {ContraventionComponent} from './components/contravention/contravention.component';
import {TaxeComponent} from './components/taxe/taxe.component';
import {DriverComponent} from './components/driver/components/driver-container/driver.component';
import {ContribuableEditFormComponent} from './components/contribuable-edit-form/contribuable-edit-form.component';
import { DriverFormComponent } from './components/driver/components/driver-form/driver-form.component';
import { DriverDetailComponent } from './components/driver/components/driver-detail/driver-detail.component';
import { DriverEditComponent } from './components/driver/components/driver-edit/driver-edit.component';

@NgModule({
  declarations: [ContribuableContainerComponent,
    ContribuableFormComponent,
    ContribuableDetailComponent,
    ContraventionComponent,
    TaxeComponent,
    DriverComponent, ContribuableEditFormComponent, DriverFormComponent, DriverDetailComponent, DriverEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    VehicleModule,
    RouterModule
  ]
})
export class ContribuableModule {
}
