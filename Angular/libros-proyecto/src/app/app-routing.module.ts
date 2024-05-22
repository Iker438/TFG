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
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  {
    path: 'main',
    component: ErrorComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'post', component: PostComponent, canActivate: [AuthGuard] },
  { path: 'menu', component: MenuComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'useredit', component: UsereditComponent, canActivate: [AuthGuard] }, 
  { path: 'register', component: RegisterComponent },
  { path: 'foro', component: ForoComponent, canActivate: [AuthGuard] },
  { path: 'libcrear', component: LibcrearComponent, canActivate: [AuthGuard] },
  { path: 'favoritos', component: FavoritosComponent, canActivate: [AuthGuard]},
  { path: 'juegos', component: JuegoComponent, canActivate: [AuthGuard] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
