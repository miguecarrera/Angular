import { Component, OnInit } from '@angular/core';
import { Gato } from '../gato';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styleUrls: ['./gato.component.css']
})
export class GatoComponent implements OnInit {

  public gato:Gato;
  public gatos:Gato[];
  public visible:boolean;
  public textoBoton = "Ocultar";

  constructor() {
    this.gato = new Gato('Benito','Siammés',16);
    this.visible = true;
    this.gatos = [];
  }

  ngOnInit() :void {
    this.gato = new Gato('', '');
    this.visible = true;
    // Array de gatos
    this.gatos = [
    new Gato('Benito','Siamés',16),
    new Gato('Tina','Persa'),
    new Gato('Sira','Común',1)
    ];

  }

  cambiarVisibilidad () :void {
    this.visible =! this.visible;
    this.textoBoton = this.visible?"Ocultar":"Mostrar";
  }

  addGato():void{
    //alert(this.gato.nombre)
    this.gatos.push(this.gato)
  }

  delGato(i:number):void{
    this.gatos.splice(i,1);
  }

}
