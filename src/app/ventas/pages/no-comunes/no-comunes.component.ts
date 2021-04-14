import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
//i18nSelect
nombre: string = 'Giselle';
genero: string ='Femenino';


//Mapeoi18Select
invitacionMapeo = {
  'Masculino':'invitarlo',
  'Femenino':'invitarla',

}

//i18nPlural

clientes: string[]= ['Jose','Pedro','Maria','Boris','Nicolas'];

//Mapeoi18Plural
clientesMapa = {
'=0':'no tenemos ningun cliente esperando.',
'=1':'tenemos un cliente esperando.',
'=2':'tenemos dos clientes esperando.',
'other':'tenemos # clientes esperando'
}

cambiarCliente(){
  this.nombre = 'Melissa';
  this.genero = 'Femenino';
}

borrarCliente(){
  this.clientes.pop();
}


//Keyvalue Pipe

persona = {
  nombre: 'Cristobal',
  edad: 21,
  direccion: 'Santiago, Chile'
}

//Json pipe

heroes = [
{
  nombre:'IronMan',
  vuela: true
},
{
  nombre:'BatMan',
  vuela: false
},
{
  nombre:'Spiderman',
  vuela: false
}
]

//Async Pipe
miObservable = interval(1000)

valorPromesa = new Promise((resolve, reject) =>
{
  setTimeout(() =>{resolve('Tenemos data de promesa');
} , 3500);

});

}

