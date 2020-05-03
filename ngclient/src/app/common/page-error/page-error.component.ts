import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.scss']
})

class PageErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class PageErrorMain extends PageErrorComponent {}
export class PageErrorAdmin extends PageErrorComponent {}
