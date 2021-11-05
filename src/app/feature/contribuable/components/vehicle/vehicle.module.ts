import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehicleContainerComponent} from './components/vehicle-container/vehicle-container.component';
import {SharedModule} from '../../../../shared/shared.module';
import {VehicleFormComponent} from './components/vehicule-form/vehicle-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DriverFormComponent} from './components/driver-form/driver-form.component';
import {VehiculeFormEditComponent} from './components/vehicule-form-edit/vehicule-form-edit.component';


@NgModule({
  declarations: [VehicleContainerComponent, VehicleFormComponent, DriverFormComponent, VehiculeFormEditComponent],
  exports: [
    VehicleFormComponent, VehiculeFormEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class VehicleModule {
}
