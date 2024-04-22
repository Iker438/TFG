import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Auth, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from '@firebase/auth';
import{ Database, getDatabase} from '@firebase/database'
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseConfig = {
    apiKey: "AIzaSyDqKlDzejh9bGoI-E0APTcnoj_PhW3Zux0",
    authDomain: "proyectofinal01-bcddb.firebaseapp.com",
    databaseURL: "https://proyectofinal01-bcddb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "proyectofinal01-bcddb",
    storageBucket: "proyectofinal01-bcddb.appspot.com",
    messagingSenderId: "254214998757",
    appId: "1:254214998757:web:e0036db352019772b2e20c",
    measurementId: "G-EKYLDJ66B9"
  };
    app = initializeApp(this.firebaseConfig);
    analytics = getAnalytics(this.app);
    auth: Auth = getAuth(this.app);
    database: Database = getDatabase(this.app);
    currentUser: User | null = null;
    constructor(){} 

    register({ email, password }: any) {
      return createUserWithEmailAndPassword(this.auth, email, password);
    }
  
    login({ email, password }: any) {
      return signInWithEmailAndPassword(this.auth, email, password);
    }
  
    loginWithGoogle() {
      return signInWithPopup(this.auth, new GoogleAuthProvider());
    }
  
    logout() {
      return signOut(this.auth);
    }
    
  getCurrentUser() {
    return this.currentUser;
  }

  getUserDisplayName() {
    return this.currentUser?.displayName;
  }

  getUserEmail() {
    return this.currentUser?.email;
  }

  getUserPhotoURL() {
    return this.currentUser?.photoURL;
  }
}
