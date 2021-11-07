import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigContainerComponent } from './components/config-container/config-container.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfigTaxeComponent } from './components/config-taxe/config-taxe.component';
import { ConfigRegieComponent } from './components/config-regie/config-regie.component';
import { ConfigContraventionComponent } from './components/config-contravention/config-contravention.component';
import { ConfigRegieFormComponent } from './components/config-regie-form/config-regie-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigRegieEditFormComponent } from './components/config-regie-edit-form/config-regie-edit-form.component';
import { ConfigRegieDetailComponent } from './components/config-regie-detail/config-regie-detail.component';
import { ConfigTaxeAddFormComponent } from './components/config-taxe-add-form/config-taxe-add-form.component';
import { ConfigTaxeEditFormComponent } from './components/config-taxe-edit-form/config-taxe-edit-form.component';
import { ConfigTaxeDetailComponent } from './components/config-taxe-detail/config-taxe-detail.component';
import { ConfigContraventionAddFormComponent } from './components/config-contravention-add-form/config-contravention-add-form.component';
import { ConfigContraventionEditFormComponent } from './components/config-contravention-edit-form/config-contravention-edit-form.component';

@NgModule({
  declarations: [
    ConfigContainerComponent,
    ConfigTaxeComponent,
    ConfigRegieComponent,
    ConfigContraventionComponent,
    ConfigRegieFormComponent,
    ConfigRegieEditFormComponent,
    ConfigRegieDetailComponent,
    ConfigTaxeAddFormComponent,
    ConfigTaxeEditFormComponent,
    ConfigTaxeDetailComponent,
    ConfigContraventionAddFormComponent,
    ConfigContraventionEditFormComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule],
})
export class ConfigurationModule {}
