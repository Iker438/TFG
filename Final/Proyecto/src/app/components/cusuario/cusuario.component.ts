import { Component, OnInit } from '@angular/core';
  import { UsuarioService } from '../../services/usuario.service'; // Importa el servicio de usuario
 // import { Libro} // Importa el modelo de libro
  import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-cusuario',
  templateUrl: './cusuario.component.html',
  styleUrl: './cusuario.component.css'
})
export class CUsuarioComponent implements OnInit {

    userData: Usuario = {}; // Objeto para almacenar los datos del usuario
    librosFavoritos: Libro[] = []; // Array para almacenar los libros favoritos del usuario
  
    constructor(private usuarioService: UsuarioService) { }
  
    ngOnInit(): void {
      // Obtener los datos del usuario al iniciar la página
      this.obtenerDatosUsuario();
      // Obtener los libros favoritos del usuario al iniciar la página
      this.obtenerLibrosFavoritos();
    }
  
    obtenerDatosUsuario(): void {
      // Lógica para obtener los datos del usuario desde el servicio de usuario
      this.usuarioService.obtenerDatosUsuario().subscribe(
        (userData: Usuario) => {
          this.userData = userData;
        },
        (error) => {
          console.error('Error al obtener los datos del usuario:', error);
        }
      );
    }
  
    obtenerLibrosFavoritos(): void {
      // Lógica para obtener los libros favoritos del usuario desde el servicio de usuario
      this.usuarioService.obtenerLibrosFavoritos().subscribe(
        (librosFavoritos: Libro[]) => {
          this.librosFavoritos = librosFavoritos;
        },
        (error) => {
          console.error('Error al obtener los libros favoritos del usuario:', error);
        }
      );
    }
  
    guardarCambios(): void {
      // Lógica para guardar los cambios en los datos del usuario
      this.usuarioService.guardarCambiosUsuario(this.userData).subscribe(
        () => {
          console.log('Cambios guardados exitosamente');
        },
        (error) => {
          console.error('Error al guardar los cambios del usuario:', error);
        }
      );
    }
  
    onFileSelected(event: any): void {
      // Lógica para manejar la selección de archivos de la fotografía de perfil
      // Aquí puedes implementar la lógica para subir la imagen al servidor si lo deseas
    }
  }
  
