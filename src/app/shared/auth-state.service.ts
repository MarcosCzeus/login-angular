import { Auth, authState } from '@angular/fire/auth';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { signOut } from 'firebase/auth';

@Injectable({
    providedIn: 'root',
    })
export class AuthStateService {
    private _auth = inject(Auth);

  get authState$(): Observable<any> {
    return authState(this._auth);
  }


  logOut() {
    return signOut(this._auth);
  }
}