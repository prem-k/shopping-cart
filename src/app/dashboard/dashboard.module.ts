import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DashboardRouteModule, dashboardRoutingComponents } from './dashboard-route.module';
import { DashboardNavComponent } from './common/dashboard-nav.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouteModule,
    FormsModule
  ],
  declarations: [
  	dashboardRoutingComponents,
  	DashboardNavComponent
  ]
})
export class DashboardModule { }
