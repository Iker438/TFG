import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ErrorComponent } from './components/error/error.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';
import { CLibrosComponent } from './components/clibros/clibros.component';
import { CUsuarioComponent } from './components/cusuario/cusuario.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';

const routes: Routes = [  { path: '', pathMatch: 'full', redirectTo: '/main' },
{
  path: 'main',
  component: MainComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/register']))
},
{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'error', component: ErrorComponent },
{ path: 'buscar', component: BuscadorComponent },
{ path: 'home', component: HomeComponent },
{ path: 'clibros', component: CLibrosComponent },
{ path: 'cusuarios', component: CUsuarioComponent },
{ path: 'comentarios', component: ComentariosComponent},
{ path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }