import { Component } from '@angular/core';
import { Opmenu } from './interfaces/opmenu';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones: Opmenu[]=[
    {
      link:'home',
      texto:'Inicio',
      icono: 'home'
    },
    {
      link:'login',
      texto:'Inicia Sesión',
      icono: 'person'
    },
    {
      link:'autos-disp',
      texto:'Vehículos',
      icono: 'car-sport'
    },
    {
      link:'viajes',
      texto:'Tus Viajes',
      icono: 'document-text'
    }
  ];
  constructor() {}
}
