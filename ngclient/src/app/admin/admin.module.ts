import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAddingComponent } from './page-adding/page-adding.component';
import {MapComponent} from './shared/components/map/map.component';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/admin-layout/admin-layout.component';
import {PageErrorAdmin} from '../common/page-error/page-error.component';
import { SharedModule } from '../common/shared.module';




@NgModule({
  declarations: [
    PageAddingComponent,
    MapComponent,
    AdminLayoutComponent,
    PageErrorAdmin
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/create', pathMatch: 'full'},
          {path: 'create', component: PageAddingComponent}
        ]
      },
      { path: 'error', component: PageErrorAdmin},
      { path: '**', redirectTo: '/admin/error', pathMatch: 'full'}
    ])
  ],
  exports: [RouterModule]
})
export class AdminModule { }
