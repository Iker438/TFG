// src/app/models/firebase-user.model.ts
import { User as FirebaseUser } from '@angular/fire/auth';

export interface FirebaseUserExtended extends FirebaseUser {
  updateProfile(profile: { displayName?: string | null; photoURL?: string | null }): Promise<void>;
}
