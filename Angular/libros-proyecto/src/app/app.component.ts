import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libros-proyecto';
  showMenu: boolean = true;
  
  constructor(private router: Router) {
  
    this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.checkRoute(event.urlAfterRedirects);
    }
  });
}

// Verifica si la ruta actual es login o register
private checkRoute(url: string): void {
  this.showMenu = !(url.includes('/login') || url.includes('/register'));
}
}
