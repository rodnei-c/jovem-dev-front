import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {


  constructor(private route: Router){

  }
  direcionarUser(){
    this.route.navigate(['../usuario/usuario.component.html'])
  }
}
