import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContribuableContainerComponent } from './components/contribuable-container/contribuable-container.component';
import { ContribuableFormComponent } from './components/contribuable-form/contribuable-form.component';
import { ContribuableDetailComponent } from './components/contribuable-detail/contribuable-detail.component';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ContribuableContainerComponent, ContribuableFormComponent, ContribuableDetailComponent],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class ContribuableModule { }
