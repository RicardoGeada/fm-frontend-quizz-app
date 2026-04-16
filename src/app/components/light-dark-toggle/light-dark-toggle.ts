import { Component, model } from '@angular/core';
import { ThemeService } from '../../services/theme/theme-service';

@Component({
  selector: 'app-light-dark-toggle',
  imports: [],
  templateUrl: './light-dark-toggle.html',
  styleUrl: './light-dark-toggle.scss',
})
export class LightDarkToggle {
  constructor(public theme: ThemeService) {}
}
