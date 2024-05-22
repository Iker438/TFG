import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  librosFavoritos: any[] = [];

  constructor(private favoritesService: FavoritesService, private router: Router) {}

  ngOnInit(): void {
    this.librosFavoritos = this.favoritesService.getFavorites();
  }

  abrirPDF(libro: any) {
    if (libro.pdf) {
      window.open(libro.pdf, '_blank');
    }
  }

  irAJuego() {
    this.router.navigate(['/juegos']);
  }
}
