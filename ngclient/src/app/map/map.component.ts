import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';
import { Map } from './map';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MapService]
})
export class MapComponent implements OnInit {
  dataMap: Map[];
  public routes: any

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.mapService.getData().subscribe(map => (this.dataMap = map));

    this.routes = [
      'метро Арбатская',
      'Красные ворота, Москва',
      'метро Парк Культуры'
    ]
  }
}
