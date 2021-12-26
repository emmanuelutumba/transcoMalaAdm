import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainRoutes } from './main/main.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(MainRoutes)],
})
export class FeatureModule {}
