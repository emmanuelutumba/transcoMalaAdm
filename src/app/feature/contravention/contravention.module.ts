import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContraventionContainerComponent } from './components/contravention-container/contravention-container.component';
import { AddContraventionContainerComponent } from './components/add-contravention-container/add-contravention-container.component';



@NgModule({
  declarations: [ContraventionContainerComponent, AddContraventionContainerComponent],
  imports: [
    CommonModule
  ]
})
export class ContraventionModule { }
