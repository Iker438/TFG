import { Component } from '@angular/core';
import { Carta } from '../../model/carta';
import { CartasService } from '../../services/cartas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  name: string = '';
  cartas: Carta[] | any = [];
  constructor(private cartaService: CartasService) { }
    buscar() {
    this.cartas = this.cartaService.getAllCartasNombre(this.name);
    console.log(this.cartas);

  }
}

