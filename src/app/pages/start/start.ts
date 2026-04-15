import { Component } from '@angular/core';
import { LightDarkToggle } from '../../components/light-dark-toggle/light-dark-toggle';
import { QuizCategoryButton } from '../../components/quiz-category-button/quiz-category-button';


@Component({
  selector: 'app-start',
  imports: [LightDarkToggle, QuizCategoryButton],
  templateUrl: './start.html',
  styleUrl: './start.scss',
})
export class Start {}
