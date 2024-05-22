import { NgModule } from '@angular/core';
//imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserComponent } from './components/user/user.component';
import { ErrorComponent } from './components/error/error.component';
import { UsereditComponent } from './components/useredit/useredit.component';
import { RegisterComponent } from './components/register/register.component';
import { ForoComponent } from './components/foro/foro.component';
import { LibcrearComponent } from './components/libcrear/libcrear.component';
import { FavoritesService } from './services/favorites.service';
//firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { JuegoComponent } from './components/juego/juego.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    PostComponent,
    UserComponent,
    ErrorComponent,
    UsereditComponent,
    RegisterComponent,
    ForoComponent,
    LibcrearComponent,
    JuegoComponent,
    FavoritosComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    FavoritesService,
    provideFirebaseApp(() => initializeApp({"projectId":"proyectofinal01-bcddb","appId":"1:254214998757:web:e0036db352019772b2e20c","databaseURL":"https://proyectofinal01-bcddb-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"proyectofinal01-bcddb.appspot.com","apiKey":"AIzaSyDqKlDzejh9bGoI-E0APTcnoj_PhW3Zux0","authDomain":"proyectofinal01-bcddb.firebaseapp.com","messagingSenderId":"254214998757","measurementId":"G-EKYLDJ66B9"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
