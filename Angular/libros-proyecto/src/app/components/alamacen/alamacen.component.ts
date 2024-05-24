import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alamacen',
  templateUrl: './alamacen.component.html',
  styleUrls: ['./alamacen.component.css']
})
export class AlamacenComponent implements OnInit {
  @ViewChild('bookModal') bookModal!: TemplateRef<any>;
  books: any[] = [];
  selectedBook: any = null;

  constructor(private http: HttpClient, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.http.get<any[]>('http://localhost:3000/api/almacen')
      .subscribe(data => {
        this.books = data;
      });
  }

  selectBook(book: any) {
    this.selectedBook = book;
    this.modalService.open(this.bookModal);
  }

  toggleFavorite(book: any) {
    // Lógica para agregar o remover de favoritos
  }

  isFavorite(book: any): boolean {
    // Lógica para verificar si es favorito
    return false;
  }

  openPdf(pdfUrl: string) {
    window.open(pdfUrl, '_blank');
  }

  navigateToAgregarLibro() {
    this.router.navigate(['/guardarlibro']);
  }
}
