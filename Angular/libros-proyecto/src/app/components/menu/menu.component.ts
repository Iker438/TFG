import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/user.service'; // Asegúrate de tener un servicio de autenticación configurado
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userImage$: Observable<string | null>;

  constructor(private router: Router, private authService: AuthService) {
    this.userImage$ = this.authService.getUserImage();
  }

  ngOnInit(): void {}

  navegarLogico(ruta: string) {
    this.router.navigate([ruta]);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn(); // Asume que tu servicio de autenticación tiene un método isLoggedIn que retorna un Observable
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
