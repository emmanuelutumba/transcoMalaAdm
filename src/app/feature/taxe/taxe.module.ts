import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxeContainerComponent } from './components/taxe-container/taxe-container.component';
import { AddTaxeContainerComponent } from './components/add-taxe-container/add-taxe-container.component';



@NgModule({
  declarations: [TaxeContainerComponent, AddTaxeContainerComponent],
  imports: [
    CommonModule
  ]
})
export class TaxeModule { }
