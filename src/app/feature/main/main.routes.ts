import {Routes} from '@angular/router';
import {MainContainerComponent} from './components/main-container/main-container.component';
import {PayementContainerComponent} from '../payement/components/payement-container/payement-container.component';
import {VehicleContainerComponent} from '../contribuable/components/vehicle/components/vehicle-container/vehicle-container.component';
import {ReportContainerComponent} from '../report/components/report-container/report-container.component';
import {ConfigContainerComponent} from '../configuration/components/config-container/config-container.component';
import {UserContainerComponent} from '../auth/component/user-container/user-container.component';
import {ReportInsuranceComponent} from '../report/components/report-insurance/report-insurance.component';
import {ReportContraventionComponent} from '../report/components/report-contravention/report-contravention.component';
import {ReportTaxeComponent} from '../report/components/report-taxe/report-taxe.component';
import {VehicleFormComponent} from '../contribuable/components/vehicle/components/vehicule-form/vehicle-form.component';
import {ContribuableFormComponent} from '../contribuable/components/contribuable-form/contribuable-form.component';
import {ContribuableContainerComponent} from '../contribuable/components/contribuable-container/contribuable-container.component';
import {ContribuableDetailComponent} from '../contribuable/components/contribuable-detail/contribuable-detail.component';
import {DriverComponent} from '../contribuable/components/driver/driver.component';
import {TaxeComponent} from '../contribuable/components/taxe/taxe.component';
import {ContraventionComponent} from '../contribuable/components/contravention/contravention.component';

export const MainRoutes: Routes = [
  {
    path: 'main',
    component: MainContainerComponent,
    children: [
      {
        path: 'report',
        component: ReportContainerComponent,
        children: [
          {
            path: 'insurance',
            component: ReportInsuranceComponent
          }, {
            path: 'contravention',
            component: ReportContraventionComponent
          }, {
            path: 'taxe',
            component: ReportTaxeComponent
          }
        ]
      },
      {
        path: 'payement',
        component: PayementContainerComponent
      }, {
        path: 'vehicle',
        component: VehicleContainerComponent
      }, {
        path: 'vehicle/add',
        component: VehicleFormComponent
      }, {
        path: 'configuration',
        component: ConfigContainerComponent
      }, {
        path: 'user',
        component: UserContainerComponent
      }, {
        path: 'contribuable',
        component: ContribuableContainerComponent
      }, {
        path: 'contribuable/add',
        component: ContribuableFormComponent
      }, {
        path: 'contribuable/detail/:id',
        component: ContribuableDetailComponent,
        children: [
          {
            path: '',
            component: VehicleContainerComponent
          }, {
            path: 'vehicule',
            component: VehicleContainerComponent
          }, {
            path: 'driver',
            component: DriverComponent
          }, {
            path: 'taxe',
            component: TaxeComponent
          }, {
            path: 'contravention',
            component: ContraventionComponent
          }
        ]
      }
    ]
  }
];
