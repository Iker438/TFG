import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contacto = {
    tipo: '',
    mensaje: '',
    email: 'usuario@example.com' // Puedes agregar el email del usuario si es necesario
  };
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('tipo', this.contacto.tipo);
    formData.append('mensaje', this.contacto.mensaje);
    formData.append('email', this.contacto.email);

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    this.http.post('http://localhost:3000/enviar-correo', formData)
      .subscribe(
        response => {
          console.log('Correo enviado exitosamente', response);
          alert('Correo enviado');
          // Resetear el formulario
          this.contacto = {
            tipo: '',
            mensaje: '',
            email: 'usuario@example.com'
          };
          this.selectedFile = null;
        },
        error => {
          console.error('Error al enviar el correo', error);
        }
      );
  }
}
