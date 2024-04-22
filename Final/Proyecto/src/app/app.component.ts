import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service'; // Asegúrate de importar AuthService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto';
  isLoggedIn: boolean = false;
  constructor(private router: Router, private authService: AuthService) {
    
  }
  navegarLogico(destino: string) {
    // Método para navegar a una ruta específica cuando se hace clic en un enlace de la barra de navegación
    // Utiliza el servicio Router para navegar a la ruta especificada
    this.router.navigate([`${destino}`]);
  }
  logout() {
    // Método para cerrar sesión
    this.authService.logout()
      .then(() => {
        this.isLoggedIn = false; // Actualizar el estado de autenticación
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
  
}
