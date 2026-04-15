import { Component, model } from '@angular/core';

@Component({
  selector: 'app-light-dark-toggle',
  imports: [],
  templateUrl: './light-dark-toggle.html',
  styleUrl: './light-dark-toggle.scss',
})
export class LightDarkToggle {

  isDarkMode = model<boolean>();

  toggle() {
    this.isDarkMode.set(!this.isDarkMode());
  }
}
