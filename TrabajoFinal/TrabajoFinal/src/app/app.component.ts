import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TrabajoFinal';
  email = String('');
  password = String('');
  constructor(private router: Router) {} 

  navegarLogico(destino: string) {
    this.router.navigate([`${destino}`]);
  }
}