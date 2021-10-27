import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainContainerComponent} from './components/main-container/main-container.component';
import {RouterModule} from '@angular/router';
import {MainRoutes} from './main.routes';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [MainContainerComponent],
    imports: [
        CommonModule, RouterModule.forChild(MainRoutes), SharedModule
    ]
})
export class MainModule {
}
