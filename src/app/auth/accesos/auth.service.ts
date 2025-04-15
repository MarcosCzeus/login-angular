import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

export interface User{
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth = inject(Auth);

  singUp( user: User) {
    return createUserWithEmailAndPassword( this._auth, user.email, user.password);
  }

  constructor() { }


SingIn(user: User) {
  return signInWithEmailAndPassword(this._auth, user.email, user.password);
  }

  singInWithGoogle() {
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({  prompt: 'select_account'});
    
    return signInWithPopup(this._auth, provider);
  }
}
