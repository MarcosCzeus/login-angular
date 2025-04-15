import { Component } from '@angular/core';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  private _authState = inject(AuthStateService);
  
  async logOut() {
    await this._authState.logOut();
  }

}
