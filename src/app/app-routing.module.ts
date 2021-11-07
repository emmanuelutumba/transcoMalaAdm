import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./feature/auth/auth.module').then((m) => m.AuthModule)
    }, {
      path: '',
      loadChildren: () => import('./feature/contravention/contravention.module').then((m) => m.ContraventionModule)
    }, {
      path: '',
      loadChildren: () => import('./feature/taxe/taxe.module').then((m) => m.TaxeModule)
    }, {
      path: '',
      loadChildren: () => import('./feature/report/report.module').then((m) => m.ReportModule)
    }, {
      path: '',
      loadChildren: () => import('./feature/main/main.module').then(m => m.MainModule)
    }, {
      path: '',
      loadChildren: () => import('./feature/contribuable/components/vehicle/vehicle.module').then(m => m.VehicleModule)
    }, {
      path: '',
      loadChildren: () => import('./feature/contribuable/contribuable.module').then(m => m.ContribuableModule)
    }
    , {
      path: '',
      loadChildren: () => import('./feature/payement/payement.module').then(m => m.PayementModule)
    }, {
      path: '',
      loadChildren: () => import('./feature/configuration/configuration.module').then(m => m.ConfigurationModule)
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
