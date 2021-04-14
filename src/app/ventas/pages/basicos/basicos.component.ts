import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'cristobal';
  nombreUpper: string = 'CRISTOBAL';
  nombreCompleto: string = 'CrIstoBaL pErEz';

  fecha: Date = new Date();//dia de hoy


}
