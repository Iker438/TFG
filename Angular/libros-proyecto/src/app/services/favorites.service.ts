import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesKey = 'favorites';

  constructor() {}

  getFavorites(): any[] {
    const favorites = localStorage.getItem(this.favoritesKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  addFavorite(book: any): void {
    const favorites = this.getFavorites();
    favorites.push(book);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }

  removeFavorite(book: any): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(favorite => favorite.id !== book.id);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }

  isFavorite(book: any): boolean {
    const favorites = this.getFavorites();
    return favorites.some(favorite => favorite.id === book.id);
  }
}
