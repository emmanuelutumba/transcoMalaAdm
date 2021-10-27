import {Routes} from '@angular/router';
import {ReportModule} from './report.module';
import {ReportContainerComponent} from './components/report-container/report-container.component';

export const ReportRoutes: Routes = [
  {
    path: 'report',
    component: ReportContainerComponent
  }
];
