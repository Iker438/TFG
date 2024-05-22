import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, transition, style, animate } from '@angular/animations';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild('bookModal') bookModal!: TemplateRef<any>;
  books: any[] = [];
  randomBooks: any[] = [];
  filteredBooks: any[] = [];
  searchQuery: string = '';
  selectedGenre: string = '';
  genres: string[] = ['Romance', 'Terror', 'Aventura', 'Historia', 'Fantasía', 'Ciencia Ficción', 'Cuentos', 'Poesía', 'Estudios', 'Recetas de cocina', 'Religión'];
  selectedBook: any = null;
  sortOrder: string = 'random'; // 'random' or 'alphabetical'

  constructor(private http: HttpClient, private favoritesService: FavoritesService, private modalService: NgbModal) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/api/libros/books').subscribe(data => {
      this.books = data;
      this.filteredBooks = this.books;
      this.getRandomBooks();
      this.sortBooks();
    });
  }

  getRandomBooks() {
    const shuffled = this.books.sort(() => 0.5 - Math.random());
    this.randomBooks = shuffled.slice(0, 4);
  }

  searchBooks() {
    this.filteredBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      (this.selectedGenre === '' || book.genre === this.selectedGenre)
    );
    this.sortBooks();
  }

  sortBooks() {
    if (this.sortOrder === 'alphabetical') {
      this.filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      this.filteredBooks.sort(() => 0.5 - Math.random());
    }
  }

  selectBook(book: any) {
    this.selectedBook = book;
    this.modalService.open(this.bookModal);
  }

  toggleFavorite(book: any) {
    if (this.isFavorite(book)) {
      this.favoritesService.removeFavorite(book);
    } else {
      this.favoritesService.addFavorite(book);
    }
  }

  isFavorite(book: any): boolean {
    return this.favoritesService.isFavorite(book);
  }
  
  agregarAFavoritos(libro: any): void {
    this.favoritesService.addFavorite(libro);
  }

  openPdf(pdfUrl: string) {
    window.open(pdfUrl, '_blank');
  }

  setSortOrder(order: string) {
    this.sortOrder = order;
    this.sortBooks();
  }
}
