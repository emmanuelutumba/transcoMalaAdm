import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportContainerComponent} from './components/report-container/report-container.component';
import {RouterModule} from '@angular/router';
import {ReportInsuranceComponent} from './components/report-insurance/report-insurance.component';
import {ReportContraventionComponent} from './components/report-contravention/report-contravention.component';
import {ReportTaxeComponent} from './components/report-taxe/report-taxe.component';
import {SharedModule} from '../../shared/shared.module';
import {ReportRoutes} from './report.routes';


@NgModule({
  declarations: [ReportContainerComponent, ReportContraventionComponent, ReportTaxeComponent, ReportInsuranceComponent],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(ReportRoutes)
  ]
})
export class ReportModule {
}
