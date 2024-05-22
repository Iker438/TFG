import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserComponent } from './components/user/user.component';
import { UsereditComponent } from './components/useredit/useredit.component';
import { RegisterComponent } from './components/register/register.component';
import { ForoComponent } from './components/foro/foro.component';
import { LibcrearComponent } from './components/libcrear/libcrear.component';
import { ErrorComponent } from './components/error/error.component';
import { JuegoComponent } from './components/juego/juego.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

const routes: Routes = [
  // Ruta principal redirigida a '/main'
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  {
    path: 'main',
    component: ErrorComponent,
    // Redirigir a '/login' si no está autenticado
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  // Rutas
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'post', component: PostComponent},
  { path: 'user', component: UserComponent },
  { path: 'useredit', component: UsereditComponent},
  { path: 'foro', component: ForoComponent},
  { path: 'libcrear', component: LibcrearComponent },
  { path: 'favoritos', component: FavoritosComponent},
  { path: 'juegos', component: JuegoComponent},
  
  // Ruta para manejar errores 404
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
