import { Component } from '@angular/core';

import { AppContentHeaderComponent } from '../app-content-header/app-content-header.component'
import { AppContentComponent } from '../app-content/app-content.component'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AppContentHeaderComponent, AppContentComponent],
  templateUrl: './app-main.component.html',
  styleUrl: './app-main.component.scss'
})
export class AppMainComponent {

}
