import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private userService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/register']);
      })
      .catch(error => console.log(error));
  }
navegarLogico(destino: string) {
  // Método para navegar a una ruta específica cuando se hace clic en un enlace de la barra de navegación
  // Utiliza el servicio Router para navegar a la ruta especificada
  this.router.navigate([`${destino}`]);
}

}

