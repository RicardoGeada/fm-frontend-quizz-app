import { Component, input } from '@angular/core';

@Component({
  selector: 'app-quiz-category-button',
  imports: [],
  templateUrl: './quiz-category-button.html',
  styleUrl: './quiz-category-button.scss',
})
export class QuizCategoryButton {
  src = input<string>('');
  text = input<string>('');
  imageBackgroundColor = input<string>('');
}
