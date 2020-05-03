import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject, Observable } from 'rxjs'
import { Map } from '../intefaces'

@Injectable()
export class MapService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Map[]> {
    return this.http.get<Map[]>('http://127.0.0.1:5000/api/data')
  }
}