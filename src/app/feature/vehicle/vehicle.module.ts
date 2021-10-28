import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleContainerComponent } from './components/vehicle-container/vehicle-container.component';
import {SharedModule} from '../../shared/shared.module';
import { AddVehicleDialogComponent } from './components/add-vehicle-dialog/add-vehicle-dialog.component';



@NgModule({
  declarations: [VehicleContainerComponent, AddVehicleDialogComponent],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class VehicleModule { }
