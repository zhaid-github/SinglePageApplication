import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParametrosService } from '../parametros.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(public router: Router, public ParametrosService: ParametrosService) { }

  ngOnInit() {
  }

  openRoute(route) {
    this.router.navigate([route]);
  }


}
