import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { ErrorComponent } from './componets/error/error.component';
import { CartasComponent } from './componets/cartas/cartas.component';
import { DibujoComponent } from './componets/dibujo/dibujo.component';
import { PerfilComponent } from './componets/perfil/perfil.component';
import { LoginComponent } from './componets/login/login.component';
import { CuentaComponent } from './componets/cuenta/cuenta.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cuenta', component: CuentaComponent},
  { path: 'home', component: HomeComponent },
  { path: 'carta', component: CartasComponent },
  { path: 'dibujo', component: DibujoComponent },
  { path: 'perfil', component: PerfilComponent},
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }