import { Routes } from '@angular/router';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { SingInComponent } from '@components/sing-in/sign-in.component';
import { IndexComponent } from '@components/index/index.component';
import { publicGuard } from './importante/auth.guard';
import { privateGuard } from './importante/auth.guard';

export const routes: Routes = [

        {
          canActivate: [ publicGuard()],
          path: 'sing-up',
          component: SingUpComponent,
        },    
      {
        canActivate: [ publicGuard()],
        path: 'sing-in',
        component: SingInComponent,
      },
      {
        canActivate: [ privateGuard()],
        path: 'index',
        component: IndexComponent,
      },
      {
        path: '' , redirectTo: 'sing-in', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'sing-in', pathMatch: 'full'
      },
];
