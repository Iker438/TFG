import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private favoritos: any[] = [];

  constructor() {}

  getFavoritos(): any[] {
    return this.favoritos;
  }

  agregarAFavoritos(libro: any): void {
    this.favoritos.push(libro);
  }

  eliminarDeFavoritos(libro: any): void {
    this.favoritos = this.favoritos.filter(fav => fav.id !== libro.id);
  }
}
