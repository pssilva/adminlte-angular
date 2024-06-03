import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppWrapperComponent } from '../app/components/app-wrapper/app-wrapper.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'adminlte-angular';
}
