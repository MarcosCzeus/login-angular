import { Component, output } from '@angular/core';

@Component({
  selector: 'app-google-button',
  imports: [],
  standalone: true,
  templateUrl: './google-button.component.html',
})
export class GoogleButtonComponent {

  onClick = output<void>();

}
