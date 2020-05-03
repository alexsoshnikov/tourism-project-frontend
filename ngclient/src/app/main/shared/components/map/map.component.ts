import { Component, OnInit } from '@angular/core';
import { Map } from '../../intefaces'
import { mapService } from '../../services/map.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  dataMap: Map[];
  public routes: any

  constructor() { }

  ngOnInit() {
    this.mapService.getData().subscribe(map => (this.dataMap = map));

    // this.routes = [
    //   'метро Арбатская',
    //   'Красные ворота, Москва',
    //   'метро Парк Культуры'
    // ]
  }

}
