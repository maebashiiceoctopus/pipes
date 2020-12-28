import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Azeroth';
  nombre2: string='AlPAca sEsI';
  activar: boolean= true;

  personajes: string[] = [
    'Malfurion',
    'Illidan',
    'Tyrande',
    'Arthas',
    'Garrosh',
    'Thrall',
  ];

  PI: number = Math.PI;

  porcentaje: number = 0.234;

  salario: number = 1234.5;

  videoUrl:string ='https://www.youtube.com/embed/anbI0kfi_rs';
  horda = {
    nombre: 'Thrall',
    clave: 'Horda',
    direccion: {
      calle: 'Azeroth',
      casa: 'ogrimar',
    },
  };

  valorPromesa = new Promise <string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  fecha: Date = new Date();
}
