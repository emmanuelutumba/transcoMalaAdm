import {Routes} from '@angular/router';
import {ReportContainerComponent} from './components/report-container/report-container.component';
import {ReportInsuranceComponent} from './components/report-insurance/report-insurance.component';

export const ReportRoutes: Routes = [
  {
    path: 'report',
    component: ReportContainerComponent,
    children: [
      {
        path: 'insurance',
        component: ReportInsuranceComponent
      }, {
        path: 'contravention',
        component: ReportInsuranceComponent
      }, {
        path: 'taxe',
        component: ReportInsuranceComponent
      }
    ]
  }
];
