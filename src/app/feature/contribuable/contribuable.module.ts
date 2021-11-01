import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContribuableContainerComponent } from './components/contribuable-container/contribuable-container.component';
import { ContribuableFormComponent } from './components/contribuable-form/contribuable-form.component';
import { ContribuableDetailComponent } from './components/contribuable-detail/contribuable-detail.component';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {VehicleModule} from './components/vehicle/vehicle.module';
import {RouterModule} from '@angular/router';
import { ContraventionComponent } from './components/contravention/contravention.component';
import { TaxeComponent } from './components/taxe/taxe.component';
import { DriverComponent } from './components/driver/driver.component';
import { ContribuableEditFormComponent } from './components/contribuable-edit-form/contribuable-edit-form.component';



@NgModule({
  declarations: [ContribuableContainerComponent, ContribuableFormComponent, ContribuableDetailComponent, ContraventionComponent, TaxeComponent, DriverComponent, ContribuableEditFormComponent],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        VehicleModule,
        RouterModule
    ]
})
export class ContribuableModule { }
