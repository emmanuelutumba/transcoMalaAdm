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
      loadChildren: () => import('./feature/vehicle/vehicle.module').then(m => m.VehicleModule)
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
