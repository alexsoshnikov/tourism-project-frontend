import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularYandexMapsModule.forRoot('38e8a410-c451-446c-8389-f45e57f1e22f')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
