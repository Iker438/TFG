import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/user.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contactoForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService // Inyecta el servicio de autenticación
  ) {
    this.contactoForm = this.fb.group({
      tipo: ['', Validators.required],
      mensaje: ['', Validators.required],
      email: [{ value: '', disabled: true }, [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.authService.getCurrentUserObservable().subscribe(user => {
      if (user) {
        this.contactoForm.get('email')?.setValue(user.email || '');
      }
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('tipo', this.contactoForm.get('tipo')?.value);
    formData.append('mensaje', this.contactoForm.get('mensaje')?.value);
    formData.append('email', this.contactoForm.get('email')?.value);

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    this.http.post('http://localhost:3000/enviar-correo', formData)
      .subscribe(
        response => {
          console.log('Correo enviado exitosamente', response);
          alert('Correo enviado');
          this.contactoForm.reset();
          this.selectedFile = null;
        },
        error => {
          console.error('Error al enviar el correo', error);
        }
      );
  }
}
