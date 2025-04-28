import { Routes } from '@angular/router';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { SingInComponent } from '@components/sing-in/sign-in.component';
import { IndexComponent } from '@components/index/index.component';

export const routes: Routes = [

        {
          path: 'sing-up',
          component: SingUpComponent,
        },    
      {
        path: 'sing-in',
        component: SingInComponent,
      },
      {
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
