import { Component, Input } from '@angular/core';
import { Carta } from '../../model/carta';
import { CartasService } from '../../services/cartas.service';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrl: './cartas.component.css'
})
export class CartasComponent {
  @Input() cartas:Carta | undefined = undefined;
}
