import { Component } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Router } from '@angular/router';
  
@Component({
  selector: 'app-guardarlibro',
  templateUrl: './guardarlibro.component.html',
  styleUrl: './guardarlibro.component.css'
})
export class GuardarlibroComponent {
    nuevoLibro = {
      titulo: '',
      genero: '',
      descripcion: ''
    };
    selectedImageFile: File | null = null;
    selectedPdfFile: File | null = null;
  
    constructor(private http: HttpClient, private router: Router) {}
  
    onFileSelected(event: any, fileType: string): void {
      const file: File = event.target.files[0];
      if (fileType === 'image') {
        this.selectedImageFile = file;
      } else if (fileType === 'pdf') {
        this.selectedPdfFile = file;
      }
    }
  
    onSubmit(): void {
      const formData = new FormData();
      formData.append('titulo', this.nuevoLibro.titulo);
      formData.append('genero', this.nuevoLibro.genero);
      formData.append('descripcion', this.nuevoLibro.descripcion);
      if (this.selectedImageFile) {
        formData.append('imagen', this.selectedImageFile);
      }
      if (this.selectedPdfFile) {
        formData.append('pdf', this.selectedPdfFile);
      }
  
      this.http.post('http://localhost:3000/api/almacen', formData)
        .subscribe(response => {
          console.log('Libro agregado', response);
          this.router.navigate(['/almacen']);
        }, error => {
          console.error('Error al agregar libro', error);
        });
    }
  }
  