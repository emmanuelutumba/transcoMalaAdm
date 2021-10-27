import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportContainerComponent} from './components/report-container/report-container.component';
import {RouterModule} from '@angular/router';
import {ReportRoutes} from './report.routes';


@NgModule({
  declarations: [ReportContainerComponent],
  imports: [
    CommonModule, RouterModule.forChild(ReportRoutes)
  ]
})
export class ReportModule {
}
