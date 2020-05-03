import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './main/page-home/page-home.component';
import { MainLayoutComponent } from './main/shared/main-layout/main-layout.component';
import { PageErrorMain } from './common/page-error/page-error.component';
import { MapComponent } from './main/shared/components/map/map.component';
import { SharedModule } from './common/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    MainLayoutComponent,
    PageErrorMain,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
