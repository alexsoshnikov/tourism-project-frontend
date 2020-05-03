import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainLayoutComponent } from './main/shared/main-layout/main-layout.component';
import { PageHomeComponent } from './main/page-home/page-home.component';
import {PageErrorMain} from './common/page-error/page-error.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: PageHomeComponent },
    ],
  },
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminModule'
  },
  { path: 'error', component: PageErrorMain },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
