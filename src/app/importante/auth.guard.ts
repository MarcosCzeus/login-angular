import { CanActivateFn } from "@angular/router"
import { Router } from "@angular/router";
import { AuthStateService } from "../shared/auth-state.service";
import { map } from "rxjs";
import { inject } from '@angular/core';

export const privateGuard = (): CanActivateFn => {
    return () => {
        const router = inject(Router);
        const authState = inject(AuthStateService);
    
        return authState.authState$.pipe(
          map((state) => {
            console.log(state);
            if (!state) {
              router.navigateByUrl('/sign-in');
              return false;
            }
    
            return true;
          })
        );
      };
    };
    
    export const publicGuard = (): CanActivateFn => {
      return () => {
        const router = inject(Router);
        const authState = inject(AuthStateService);
    
        return authState.authState$.pipe(
          map((state) => {
            if (state) {
              router.navigateByUrl('/index');
              return false;
            }
    
            return true;
          })
        );
      };
    };