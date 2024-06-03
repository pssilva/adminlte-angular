import { Component } from '@angular/core';

import { AppContentHeaderComponent } from '../app-content-header/app-content-header.component'
import { AppContentComponent } from '../app-content/app-content.component'
import { AppFooterComponent } from '../app-footer/app-footer.component'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AppContentHeaderComponent, AppContentComponent, AppFooterComponent],
  templateUrl: './app-main.component.html',
  styleUrl: './app-main.component.scss'
})
export class AppMainComponent {

}
