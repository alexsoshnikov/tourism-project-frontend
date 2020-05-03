import { NgModule } from '@angular/core';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    HttpClientModule,
    AngularYandexMapsModule.forRoot('38e8a410-c451-446c-8389-f45e57f1e22f')
  ],
  exports: [
    HttpClientModule,
    AngularYandexMapsModule
  ]
})
export class SharedModule { }
