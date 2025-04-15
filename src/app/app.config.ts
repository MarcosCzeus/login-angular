import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
  (provideFirebaseApp(() => initializeApp(environment.firebase))),
  provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"angularcripto-18","appId":"1:929023128848:web:a25778ba4ec0799fc7a195","storageBucket":"angularcripto-18.firebasestorage.app","apiKey":"AIzaSyBvJpqkJEqsVZze8iGYRBytq3TkN8uQ394","authDomain":"angularcripto-18.firebaseapp.com","messagingSenderId":"929023128848"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
