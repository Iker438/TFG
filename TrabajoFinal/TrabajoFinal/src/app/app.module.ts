import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { PerfilComponent } from './componets/perfil/perfil.component';
import { DibujoComponent } from './componets/dibujo/dibujo.component';
import { CartasComponent } from './componets/cartas/cartas.component';
import { ErrorComponent } from './componets/error/error.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componets/login/login.component';
import { CuentaComponent } from './componets/cuenta/cuenta.component';
import { MainComponent } from './componets/main/main.component';
import { RegisterComponent } from './componets/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilComponent,
    DibujoComponent,
    CartasComponent,
    ErrorComponent,
    LoginComponent,
    CuentaComponent,
    MainComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
