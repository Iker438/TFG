import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase/compat';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  db: firebase.database.Database;

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.db = firebase.database();
  }

  // Método para guardar los datos del usuario en la base de datos
  guardarDatosUsuario(uid: string, userData: any): Promise<void> {
    return this.db.ref(`usuarios/${uid}`).set(userData);
  }

  // Método para obtener los datos del usuario desde la base de datos
  obtenerDatosUsuario(uid: string): Promise<any> {
    return this.db.ref(`usuarios/${uid}`).once('value').then(snapshot => {
      return snapshot.val();
    });
  }

  // Método para actualizar los datos del usuario en la base de datos
  actualizarDatosUsuario(uid: string, userData: any): Promise<void> {
    return this.db.ref(`usuarios/${uid}`).update(userData);
  }
}
