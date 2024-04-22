import { Component, OnInit } from '@angular/core';
import { Carta } from '../../model/carta';
import { CartasService } from '../../services/cartas.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '@firebase/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartas: Carta[] = [];
  isLoggedIn: boolean = false;
  randomBooks: Carta[] = []; // Array para almacenar libros aleatorios
  filteredBooks: Carta[] = []; // Array para almacenar libros filtrados
  searchTitle: string = ''; // Título de búsqueda
  selectedGenre: string = 'all'; // Género seleccionado
  genres: string[] = []; // Lista de géneros disponibles

  constructor(
    private cartasService: CartasService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Obtener las cartas al iniciar la página
    this.obtenerCartas();

    // Verificar si el usuario está autenticado
    this.authService.auth.onAuthStateChanged((user: User | null) => {
      this.isLoggedIn = !!user; // Convertir el usuario en un valor booleano
    });

    // Obtener géneros disponibles
    this.getAvailableGenres();
  }

  obtenerCartas(): void {
    this.cartas = this.cartasService.getAllCartas();
    // Obtener libros aleatorios
    this.randomBooks = this.getRandomBooks(4);
    // Inicialmente, mostrar todos los libros
    this.filteredBooks = this.cartas;
  }

  onClick() {
    // Método para cerrar sesión
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.error('Error al cerrar sesión:', error));
  }

  navegarLogico(destino: string) {
    // Método para navegar a una ruta específica cuando se hace clic en un enlace de la barra de navegación
    this.router.navigate([`${destino}`]);
  }

  // Obtener libros aleatorios
  getRandomBooks(num: number): Carta[] {
    const randomIndexes: number[] = [];
    const randomBooks: Carta[] = [];
    // Generar índices aleatorios únicos
    while (randomIndexes.length < num) {
      const randomIndex = Math.floor(Math.random() * this.cartas.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    // Obtener los libros correspondientes a los índices aleatorios
    randomIndexes.forEach(index => {
      randomBooks.push(this.cartas[index]);
    });
    return randomBooks;
  }

  // Obtener géneros disponibles
  getAvailableGenres(): void {
    this.genres = Array.from(new Set(this.cartas.map(carta => carta.archetype)));
  }

  // Filtrar libros por título y género seleccionado
  filterBooksByGenre(): void {
    if (this.selectedGenre === 'all') {
      // Mostrar todos los libros si se selecciona 'Todos los géneros'
      this.filteredBooks = this.cartas.filter(carta => carta.name.toLowerCase().includes(this.searchTitle.toLowerCase()));
    } else {
      // Filtrar libros por título y género
      this.filteredBooks = this.cartas.filter(carta => 
        carta.name.toLowerCase().includes(this.searchTitle.toLowerCase()) && carta.archetype === this.selectedGenre
      );
    }
  }
}

