import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInAnonymously, User as FirebaseUser } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './auht.service';
import { switchMap, take } from 'rxjs/operators';
import { FirebaseUserExtended } from '../model/firebase-user.model';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string | null = null;
  private currentUser = new BehaviorSubject<FirebaseUserExtended | null>(null);
  private userImage = new BehaviorSubject<string | null>(null);

  constructor(private auth: Auth, private userService: UserService) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.loggedIn.next(true);
        const extendedUser = user as FirebaseUserExtended;
        this.currentUser.next(extendedUser);
        this.userImage.next(user.photoURL);
        user.getIdToken().then(token => this.token = token);
        if (!user.isAnonymous) {
          this.userService.getUserByEmail(user.email!).subscribe(users => {
            if (users.length === 0) {
              // User not found, create a new one
              this.userService.getAllUsers().pipe(
                take(1),
                switchMap(allUsers => {
                  const newUserId = allUsers.length > 0 ? Math.max(...allUsers.map(u => u.id)) + 1 : 1;
                  const newUser: User = {
                    id: newUserId,
                    username: user.displayName || 'User',
                    role: 'user',
                    email: user.email || 'no-email@example.com', // Asigna un email predeterminado si es null
                    phone: '',
                    image: user.photoURL || ''
                  };
                  return this.userService.createUser(newUser);
                })
              ).subscribe();
            }
          });
        }
      } else {
        this.loggedIn.next(false);
        this.token = null;
        this.currentUser.next(null);
        this.userImage.next(null);
      }
    });
  }

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password).then(userCredential => {
      return userCredential.user.getIdToken().then(token => {
        this.token = token;
        return userCredential;
      });
    });
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider()).then(userCredential => {
      return userCredential.user.getIdToken().then(token => {
        this.token = token;
        return userCredential;
      });
    });
  }

  loginAsGuest() {
    return signInAnonymously(this.auth).then(userCredential => {
      this.currentUser.next(userCredential.user as FirebaseUserExtended);
      this.loggedIn.next(true);
      return userCredential;
    });
  }

  logout() {
    return signOut(this.auth).then(() => {
      this.token = null;
      this.currentUser.next(null);
    });
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  getToken(): string | null {
    return this.token;
  }

  getCurrentUser(): FirebaseUserExtended | null {
    return this.currentUser.value;
  }

  getCurrentUserObservable(): Observable<FirebaseUserExtended | null> {
    return this.currentUser.asObservable();
  }

  setUserImage(imageUrl: string): void {
    if (this.currentUser.value) {
      this.userImage.next(imageUrl);
      this.currentUser.value.updateProfile({ photoURL: imageUrl });
    }
  }

  getUserImage(): Observable<string | null> {
    return this.userImage.asObservable();
  }
}
